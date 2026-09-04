#!/usr/bin/env python3
"""Check CV coverage, personal navigation, legacy redirects, and publication links."""
from pathlib import Path
from html import unescape
from html.parser import HTMLParser
import json
import re
import sys
from cv_content import make_pages, make_redirects
from markdown_content import load_blogs

ROOT=Path(__file__).resolve().parents[1]
OUTPUT=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else ROOT/'docs'
profile=json.loads((ROOT/'content/profile.json').read_text())
config=json.loads((ROOT/'content/site.json').read_text())
research=json.loads((ROOT/'content/research.json').read_text())
custom=json.loads((ROOT/'content/pages.json').read_text())
custom+=load_blogs(ROOT/'content/blogs')
pages=make_pages(profile,config,research,custom)
old=json.loads((ROOT/'content/reference-routes.json').read_text())['routes']
redirects=make_redirects(old,pages)
info=json.loads((OUTPUT/'build-info.json').read_text())
manifest=json.loads((OUTPUT/'route-manifest.json').read_text())
routes={p['route'] for p in pages}
assert len(routes)==len(pages),'Duplicate content routes'
assert set(old)<=routes|set(redirects),'An original route was lost'
assert all(t in routes for t in redirects.values()),'Redirect chain or unknown destination'
assert info['content_pages']==len(pages)
assert info['legacy_redirects']==len(redirects)
assert manifest['redirects']==redirects

def plaintext(html):
    return unescape(re.sub(r'<[^>]+>',' ',html))

for p in pages:
    html=(OUTPUT/p['route'].strip('/')/'index.html').read_text()
    assert html.count('<h1')==1,p['route']
    nav=html.split('id="primary-nav"',1)[1].split('</nav>',1)[0]
    assert nav.index('>Blogs</a>')<nav.index('>About</a>')<nav.index('>Join</a>'),p['route']
    assert 'nav-join' not in nav,p['route']
    contact=html.split('<section class="contact">',1)[1].split('</section>',1)[0]
    assert 'github.com' not in contact.lower(),p['route']
    assert not re.search(r'CSIR-Central Road Research Institute(?! \(Ministry of Science and Technology, Govt of India\))',html),p['route']
    assert config['name'] in html,p['route']
    for unwanted in ('Your name','Awaiting your content','Add your professional biography','Vanderbilt','NPCIL','eigenplus','Glacier Simulations','Designer / animator'):
        assert unwanted not in html,(p['route'],unwanted)
    for target in p.get('items',[]): assert target in routes,(p['route'],target)
    assert not re.search(r'\b(?:listed|recorded|records|supplied|provided|per|in|from)\s+(?:in\s+)?(?:the\s+|my\s+|supplied\s+)?CV\b',html,re.I),p['route']
    assert not re.search(r'\bB\.?\s*Tech\b|bachelor|A\.K\.T\.U\.',html,re.I),p['route']
    if p.get('record_type'):
        visible=plaintext(html.split('<main id="main">',1)[1].split('</main>',1)[0])
        assert p['title'] in visible,p['route']
        assert p.get('body'),p['route']

counts={'publication':'publications','research':'research_projects','consultancy':'consultancy','experience':'experience',
        'education':'education','award':'awards','conference':'conferences','book':'books','outreach':'outreach'}
for typ,key in counts.items():
    assert sum(p.get('record_type')==typ for p in pages)==len(profile[key]),key

about=plaintext((OUTPUT/'about/index.html').read_text().split('<main id="main">',1)[1].split('</main>',1)[0])
for key in ['publications','research_projects','consultancy','awards','books','conferences','outreach']:
    for item in profile[key]: assert item['title'] in about,(key,item['title'])
for item in profile['education']: assert item['institution'] in about,item
for item in profile['experience']: assert item['institution'] in about,item
for item in profile['interests']: assert item in about,item
for unwanted in ('Pay Level','Rs. 6600','1000 per hour'): assert unwanted not in about,unwanted
assert all(item.get('url','').startswith('https://') for item in profile['publications'])
assert sum(p.get('status')=='Abstract accepted' for p in pages)==3
assert [x['degree'] for x in profile['education']]==['Ph.D.','M.Tech.']
assert len([p for p in pages if p.get('section')=='Blog'])>=5
for p in pages:
    if p.get('section')=='Blog':
        assert p.get('image') and p.get('markdown_file'),p['route']
        markdown=p['body'][0]['markdown']
        assert len(markdown.split())>=350,p['route']
        assert '![' in markdown and '](' in markdown,p['route']
        assert 'IRC:' in markdown and 'India' in markdown,p['route']
for item in profile['education']+profile['experience']: assert (OUTPUT/item['logo']).is_file(),item['logo']
about_html=(OUTPUT/'about/index.html').read_text()
pub_html=(OUTPUT/'publications/index.html').read_text()
assert about_html.count('class="institution-logo"')==len(profile['experience'])
assert about_html.count('class="college-logo"')==len(profile['education'])
assert about_html.count('class="record-item publication-record"')==len(profile['publications'])
for item in profile['publications']:
    assert (OUTPUT/item['cover']).is_file(),item['cover']
    assert item['cover'] in about_html and item['cover'] in pub_html,item['title']
assert 'Indian Roads Congress (IRC)' in about and 'Life member' in about
assert 'Online lecture' in about
for route in ['/contact','/about']:
    main=(OUTPUT/route.strip('/')/'index.html').read_text().split('<main id="main">')[1].split('</main>')[0]
    assert 'github.com' not in main.lower(),route
home=(OUTPUT/'index.html').read_text()
for name in ['works-publications','works-projects','focus-publication','focus-research']:
    assert f'assets/sketches/{name}.png' in home,name
for role in ['scientist','educator','computational-researcher','bridge-engineer']:
    assert (OUTPUT/'assets/sketches'/f'{role}.png').is_file(),role
menu=json.loads((OUTPUT/'assets/navigation.json').read_text())
assert [x['label'] for x in menu['menus']]==['Research','Codes','Highlights']
assert all(len(col['items'])==4 for group in menu['menus'] for col in group['columns'])
assert 'iitrabhi' not in json.dumps(menu) and 'abhigupta.io' not in json.dumps(menu)
assert (OUTPUT/'assets/app.js').read_bytes()==(ROOT/'assets/app.js').read_bytes()
assert (OUTPUT/'assets/style.css').read_bytes()==(ROOT/'assets/style.css').read_bytes()
print(f'PASS: {len(pages)} content pages, {sum(len(profile[k]) for k in counts.values())} professional records, all {len(old)} original addresses retained.')
print('PASS: covers, circular-logo markup, Markdown blogs, membership, outreach, contact cleanup, identity, and navigation.')
