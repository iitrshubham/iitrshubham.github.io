#!/usr/bin/env python3
"""Check CV coverage, personal navigation, legacy redirects, and publication links."""
from pathlib import Path
from html import unescape
from html.parser import HTMLParser
import json
import re
import sys
from cv_content import make_pages, make_redirects

ROOT=Path(__file__).resolve().parents[1]
OUTPUT=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else ROOT/'docs'
profile=json.loads((ROOT/'content/profile.json').read_text())
config=json.loads((ROOT/'content/site.json').read_text())
research=json.loads((ROOT/'content/research.json').read_text())
custom=json.loads((ROOT/'content/pages.json').read_text())
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
    assert nav.index('>Blogs</a>')<nav.index('>Join</a>')<nav.index('>About</a>'),p['route']
    assert config['name'] in html,p['route']
    for unwanted in ('Your name','Awaiting your content','Add your professional biography','Vanderbilt','NPCIL','eigenplus','Glacier Simulations','Designer / animator'):
        assert unwanted not in html,(p['route'],unwanted)
    for target in p.get('items',[]): assert target in routes,(p['route'],target)
    if p.get('record_type'):
        visible=plaintext(html.split('<main id="main">',1)[1].split('</main>',1)[0])
        assert p['title'] in visible,p['route']
        assert p.get('body'),p['route']

counts={'publication':'publications','research':'research_projects','consultancy':'consultancy','experience':'experience',
        'education':'education','award':'awards','conference':'conferences','book':'books'}
for typ,key in counts.items():
    assert sum(p.get('record_type')==typ for p in pages)==len(profile[key]),key

about=plaintext((OUTPUT/'about/index.html').read_text().split('<main id="main">',1)[1].split('</main>',1)[0])
for key in ['publications','research_projects','consultancy','awards','books','conferences']:
    for item in profile[key]: assert item['title'] in about,(key,item['title'])
for item in profile['education']: assert item['institution'] in about,item
for item in profile['experience']: assert item['institution'] in about,item
for item in profile['interests']: assert item in about,item
for unwanted in ('Pay Level','Rs. 6600','1000 per hour'): assert unwanted not in about,unwanted
assert all(item.get('url','').startswith('https://') for item in profile['publications'])
assert sum(p.get('status')=='Abstract accepted' for p in pages)==3
menu=json.loads((OUTPUT/'assets/navigation.json').read_text())
assert [x['label'] for x in menu['menus']]==['Research','Codes','Highlights']
assert all(len(col['items'])==4 for group in menu['menus'] for col in group['columns'])
assert 'iitrabhi' not in json.dumps(menu) and 'abhigupta.io' not in json.dumps(menu)
assert (OUTPUT/'assets/app.js').read_bytes()==(ROOT/'assets/app.js').read_bytes()
assert (OUTPUT/'assets/style.css').read_bytes()==(ROOT/'assets/style.css').read_bytes()
print(f'PASS: {len(pages)} content pages, {sum(len(profile[k]) for k in counts.values())} CV records, all {len(old)} original addresses retained.')
print('PASS: personal menus, publication links, accepted-abstract status, identity, and CV coverage.')
