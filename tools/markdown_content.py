"""Small, dependency-free Markdown reader for editable blog posts.

Supported: scalar front matter, paragraphs, ##–###### headings, bold/emphasis,
inline code, links, images with optional captions, flat lists, blockquotes,
fenced code and pipe tables. Raw HTML is escaped, not executed.
"""
from html import escape
import json
from pathlib import Path
import re
from urllib.parse import urlsplit


def load_blogs(directory):
    pages = []
    for file in sorted(Path(directory).glob('*.md')):
        text = file.read_text(encoding='utf-8')
        if not text.startswith('---\n'):
            raise ValueError(f'{file.name}: start with --- metadata ---')
        parts = text.split('\n---\n', 1)
        if len(parts) != 2:
            raise ValueError(f'{file.name}: missing metadata closing ---')
        metadata, body = parts
        record = {}
        for line in metadata.splitlines()[1:]:
            if not line.strip() or line.lstrip().startswith('#'): continue
            key, separator, value = line.partition(':')
            if not separator or not re.fullmatch(r'[a-z_]+', key):
                raise ValueError(f'{file.name}: invalid metadata: {line}')
            value = value.strip()
            if key in record: raise ValueError(f'{file.name}: duplicate {key}')
            record[key] = json.loads(value) if value.startswith('"') else value
            if not isinstance(record[key], str): raise ValueError('Metadata values must be strings')
        for key in ['route', 'title', 'summary', 'image', 'image_alt']:
            if not record.get(key): raise ValueError(f'{file.name}: missing {key}')
        if not record['route'].startswith('/blog/'): raise ValueError('Blog routes must start /blog/')
        record.update(section='Blog', kind='detail', body=[{'markdown':body.strip()}],
                      markdown_file='content/blogs/'+file.name)
        pages.append(record)
    if len({p['route'] for p in pages}) != len(pages): raise ValueError('Duplicate Markdown blog routes')
    return pages


def render_markdown(text, local_url):
    def safe_url(value):
        parts = urlsplit(value)
        if parts.scheme in {'https', 'http', 'mailto'}: return value
        if parts.scheme or value.startswith('//'): raise ValueError(f'Unsafe Markdown URL: {value}')
        if value.startswith(('/', 'assets/', '#')): return local_url(value)
        raise ValueError(f'Use /route/ or assets/file for local links: {value}')

    def inline(value):
        # Match complete tokens first so code and URLs cannot become emphasis.
        pattern = r'`[^`]+`|!?\[[^\]]*\]\([^\s)]+(?:\s+"[^"]*")?\)|\*\*[^*]+\*\*|\*[^*]+\*'
        out, end = [], 0
        for token in re.finditer(pattern, value):
            out.append(escape(value[end:token.start()]))
            part = token.group()
            if part.startswith('`'): out.append('<code>'+escape(part[1:-1])+'</code>')
            elif part.startswith('**'): out.append('<strong>'+inline(part[2:-2])+'</strong>')
            elif part.startswith('*'): out.append('<em>'+inline(part[1:-1])+'</em>')
            else:
                m = re.fullmatch(r'(!?)\[([^\]]*)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)', part)
                picture, label, url, caption = m.groups()
                url = escape(safe_url(url), quote=True)
                if picture:
                    out.append('<img loading="lazy" src="'+url+'" alt="'+escape(label,quote=True)+'">')
                else:
                    out.append('<a href="'+url+'">'+inline(label)+'</a>')
            end = token.end()
        out.append(escape(value[end:]))
        return ''.join(out)

    def cells(line): return [c.strip() for c in line.strip().strip('|').split('|')]
    def is_rule(line): return bool(re.fullmatch(r'\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*',line))
    def special(line): return bool(re.match(r'^(#{1,6} |[-*] |\d+\. |> ?|```|!\[)',line))

    lines, out, i = text.splitlines(), [], 0
    while i < len(lines):
        line = lines[i].strip()
        if not line: i += 1; continue
        if line.startswith('```'):
            language = line[3:].strip()
            if language and not re.fullmatch(r'[\w+-]+',language): raise ValueError('Invalid code language')
            i += 1; code = []
            while i<len(lines) and not lines[i].strip().startswith('```'): code.append(lines[i]); i+=1
            if i==len(lines): raise ValueError('Unclosed fenced code block')
            out.append('<pre><code>'+escape('\n'.join(code))+'</code></pre>'); i+=1; continue
        heading = re.match(r'^(#{1,6})\s+(.+)$',line)
        if heading:
            level = len(heading[1])
            if level==1: raise ValueError('Use ## for sections; the title supplies the page h1')
            out.append(f'<h{level}>'+inline(heading[2])+f'</h{level}>'); i+=1; continue
        picture = re.fullmatch(r'!\[([^\]]*)\]\(([^\s)]+)(?:\s+"([^"]*)")?\)',line)
        if picture:
            alt, url, caption = picture.groups()
            out.append('<figure class="article-figure"><img loading="lazy" src="'+escape(safe_url(url),quote=True)+'" alt="'+escape(alt,quote=True)+'">'+('<figcaption>'+inline(caption)+'</figcaption>' if caption else '')+'</figure>'); i+=1; continue
        if i+1<len(lines) and '|' in line and is_rule(lines[i+1]):
            headers = cells(line); rows = []; i+=2
            while i<len(lines) and lines[i].strip() and '|' in lines[i]:
                row = cells(lines[i])
                if len(row)!=len(headers): raise ValueError('Markdown table column count differs')
                rows.append(row); i+=1
            out.append('<div class="table-wrap"><table class="article-table"><thead><tr>'+''.join('<th scope="col">'+inline(c)+'</th>' for c in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+inline(c)+'</td>' for c in row)+'</tr>' for row in rows)+'</tbody></table></div>'); continue
        list_item = re.match(r'^([-*]|\d+\.)\s+(.+)$',line)
        if list_item:
            ordered = list_item[1][0].isdigit(); items = []
            while i<len(lines):
                m=re.match(r'^([-*]|\d+\.)\s+(.+)$',lines[i].strip())
                if not m or m[1][0].isdigit()!=ordered: break
                items.append('<li>'+inline(m[2])+'</li>'); i+=1
            tag='ol' if ordered else 'ul'; out.append(f'<{tag}>'+''.join(items)+f'</{tag}>'); continue
        if line.startswith('>'):
            quote=[]
            while i<len(lines) and lines[i].strip().startswith('>'): quote.append(lines[i].strip()[1:].strip()); i+=1
            out.append('<blockquote><p>'+inline(' '.join(quote))+'</p></blockquote>'); continue
        paragraph=[line]; i+=1
        while i<len(lines) and lines[i].strip() and not special(lines[i].strip()):
            if i+1<len(lines) and is_rule(lines[i+1]): break
            paragraph.append(lines[i].strip()); i+=1
        out.append('<p>'+inline(' '.join(paragraph))+'</p>')
    return '\n'.join(out)
