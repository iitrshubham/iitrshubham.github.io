#!/usr/bin/env python3
"""Regression checks for the intentionally small Markdown feature set."""
from markdown_content import load_blogs, render_markdown
from pathlib import Path

def render(text):
    return render_markdown(text, lambda path: '/portfolio/'+path.lstrip('/'))

assert '<h2>Section</h2>' in render('## Section')
assert '<strong>bold</strong>' in render('**bold**')
assert '<em>italic</em>' in render('*italic*')
assert '<code>a &lt; b</code>' in render('`a < b`')
assert '<script>' not in render('<script>alert(1)</script>')
assert 'href="https://example.org?a=1&amp;b=2"' in render('[Source](https://example.org?a=1&b=2)')
assert 'href="/portfolio/about/"' in render('[About](/about/)')
assert 'src="/portfolio/assets/figure.svg"' in render('![Description](/assets/figure.svg "Caption")')
assert '<figcaption>Caption</figcaption>' in render('![Description](/assets/figure.svg "Caption")')
assert '<ul><li>One</li><li>Two</li></ul>' in render('- One\n- Two')
assert '<ol><li>One</li><li>Two</li></ol>' in render('1. One\n2. Two')
assert '<blockquote><p>Note</p></blockquote>' in render('> Note')
assert '<pre><code>print(&quot;hi&quot;)</code></pre>' in render('```python\nprint("hi")\n```')
assert '<td>B</td>' in render('| First | Second |\n| --- | --- |\n| A | B |')
assert '<th scope="col">First</th>' in render('| First | Second |\n| :--- | ---: |\n| A | B |')
for invalid in ['[X](javascript:alert)', '[X](//evil.example)', '[X](data:text/html,code)', '# Extra title', '```\nunclosed']:
    try:
        render(invalid)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid Markdown accepted: '+invalid)

blogs=load_blogs(Path(__file__).resolve().parents[1]/'content/blogs')
assert len(blogs)>=5
for blog in blogs:
    html=render(blog['body'][0]['markdown'])
    assert '<table class="article-table">' in html,blog['route']
    assert '<figure class="article-figure">' in html,blog['route']
    assert '![' not in html,blog['route']
print(f'PASS: Markdown features, safe links, escaping, subpath assets, and all {len(blogs)} complete blog posts.')
