#!/usr/bin/env python3
"""Check every generated HTML page for unresolved local links and assets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
import json,sys

class Links(HTMLParser):
    def __init__(self):
        super().__init__();self.refs=[];self.h1=0;self.title=False;self.ids=set()
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='h1':self.h1+=1
        if tag=='title':self.title=True
        if 'id' in attrs:self.ids.add(attrs['id'])
        for key in ('href','src'):
            if key in attrs:self.refs.append(attrs[key])

root=Path(sys.argv[1] if len(sys.argv)>1 else 'docs').resolve()
info=json.loads((root/'build-info.json').read_text())
base=info['base_path'];errors=[];count=0;parsers={}
for path in root.rglob('*.html'):
    parser=Links();parser.feed(path.read_text(encoding='utf-8'));parsers[path]=parser
    if parser.h1 != 1:errors.append(f'{path.relative_to(root)}: expected one h1, got {parser.h1}')
    if not parser.title:errors.append(f'{path.relative_to(root)}: missing title')
for path,parser in parsers.items():
    for ref in parser.refs:
        parsed=urlsplit(ref)
        if parsed.scheme or parsed.netloc:continue
        rel=unquote(parsed.path)
        if rel.startswith('/'):
            if base:
                if not rel.startswith(base+'/'):errors.append(f'{path.relative_to(root)}: link ignores base path: {ref}');continue
                rel=rel[len(base):]
            target=root/rel.lstrip('/')
        else:target=path.parent/rel if rel else path
        if target.is_dir():target=target/'index.html'
        target=target.resolve()
        if not target.is_relative_to(root) or not target.exists():errors.append(f'{path.relative_to(root)}: missing {ref}')
        elif parsed.fragment and target in parsers and parsed.fragment not in parsers[target].ids:errors.append(f'{path.relative_to(root)}: missing anchor {ref}')
        count+=1
# Menu links are loaded from a shared JSON file, so validate them as well.
navigation=root/'assets/navigation.json'
if navigation.exists():
    nav=json.loads(navigation.read_text(encoding='utf-8'))
    menu_count=0
    for group in nav['menus']:
        menu_count+=1
        entries=[item for column in group['columns'] for item in column['items']]+group['features']+group['actions']
        for item in entries:
            ref=item['href'];parsed=urlsplit(ref)
            if parsed.scheme:
                if parsed.scheme not in ('https','http'):errors.append(f'Navigation: unsupported URL {ref}')
            else:
                target=root/parsed.path.lstrip('/')
                if target.is_dir():target=target/'index.html'
                if not target.resolve().is_relative_to(root) or not target.exists():errors.append(f'Navigation: missing link {ref}')
            if item.get('image'):
                image=root/'assets'/item['image']
                if not image.resolve().is_relative_to(root) or not image.is_file():errors.append(f'Navigation: missing thumbnail {item["image"]}')
            count+=1
    print(f'Checked {menu_count} shared navigation menus.')
if errors:
    print('\n'.join(errors[:30]));print(f'{len(errors)} errors');sys.exit(1)
print(f'PASS: {len(parsers)} HTML files, {count} local references, no unresolved links or assets.')
