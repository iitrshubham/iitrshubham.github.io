#!/usr/bin/env python3
"""Build a dependency-free, multi-page academic website for GitHub Pages."""
from __future__ import annotations
import argparse
from datetime import date
from html import escape
import json
import os
from pathlib import Path
import re
import shutil
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / 'content/site.json').read_text(encoding='utf-8'))
PAGES = json.loads((ROOT / 'content/pages.json').read_text(encoding='utf-8'))
BY_ROUTE = {page['route']: page for page in PAGES}
BASE = os.environ.get('PAGES_BASE_PATH', CONFIG.get('base_path', '')).rstrip('/')
ORIGIN = os.environ.get('PAGES_ORIGIN', CONFIG.get('site_url', '')).rstrip('/')
if BASE and (not BASE.startswith('/') or '..' in BASE or '://' in BASE):
    raise ValueError('base_path must be empty or a path such as /my-website')

GROUPS = {
    'Home': [('/', 'Main page'), ('/about', 'About')],
    'Core content': [('/blog', 'Blogs'), ('/talks', 'Talks'), ('/projects', 'Projects'), ('/workshops', 'Workshops'), ('/publications', 'Publications')],
    'Curated': [('/books', 'Books'), ('/videos', 'Videos'), ('/frameworks', 'Frameworks'), ('/breakthrough-ideas', 'Breakthrough ideas')],
    'Metadata': [('/eras', 'Eras'), ('/tags', 'Tags'), ('/roles', 'Roles'), ('/categories', 'Categories'), ('/research-areas', 'Research areas')],
    'Notables': [('/awards', 'Awards'), ('/press', 'Press'), ('/funding', 'Funding'), ('/judging', 'Judging'), ('/outreach', 'Outreach')]
}
NAV = {'Research': [('/publications', 'Publications'), ('/projects', 'Projects'), ('/research-areas', 'Research areas'), ('/talks', 'Talks')],
       'Codes': [('/frameworks', 'Frameworks'), ('/workshops', 'Workshops'), ('/books', 'Books'), ('/applications', 'Applications')],
       'Highlights': [('/news', 'News'), *GROUPS['Notables']]}
ROLES = [('/computational-scientist', 'Computational scientist', '01'), ('/designer-animator', 'Designer / animator', '02'), ('/web-android-developer', 'Developer', '03'), ('/entrepreneur', 'Entrepreneur', '04')]

def e(value):
    return escape(str(value), quote=True)

def validate_route(route):
    if route != '/' and not re.fullmatch(r'/[a-zA-Z0-9_+.-]+(?:/[a-zA-Z0-9_+.-]+)*', route):
        raise ValueError(f'Invalid route: {route!r}')
    if any(part in {'.', '..'} for part in route.split('/')):
        raise ValueError(f'Unsafe route: {route!r}')

def href(route):
    if route == '/': return f'{BASE}/'
    validate_route(route)
    return f'{BASE}{route}/'

def asset(path):
    path = path.lstrip('/')
    if '..' in Path(path).parts: raise ValueError('Asset path cannot contain ..')
    return f'{BASE}/{path}'

def external(value):
    if not value: return ''
    if urlsplit(value).scheme in ('https', 'http', 'mailto'): return value
    if value.startswith('assets/') or value.startswith('/assets/'): return asset(value)
    raise ValueError(f'Link must use https://, mailto:, or assets/: {value!r}')

def icon(name):
    paths = {'search': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
             'theme': '<path d="M20.5 13.3A8.5 8.5 0 0 1 10.7 3.5 8.5 8.5 0 1 0 20.5 13.3Z"/>',
             'menu': '<path d="M4 6h16M4 12h16M4 18h16"/>',
             'close': '<path d="m6 6 12 12M18 6 6 18"/>'}
    return f'<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>'

def link(route, title, cls=''):
    return f'<a href="{e(href(route))}" class="{cls}">{e(title)}</a>'

def button(value, title, primary=False):
    return f'<a class="button{" primary" if primary else ""}" href="{e(external(value))}">{e(title)}</a>' if value else ''

def header():
    menus = ''.join(f'<details><summary>{label}</summary><div class="dropdown">' + ''.join(link(r,t) for r,t in rows) + '</div></details>' for label,rows in NAV.items())
    return f'''<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap nav-shell">
      {link('/', CONFIG['initials'], 'brand')}<nav class="nav-links" data-nav id="primary-nav" aria-label="Main navigation">{menus}{link('/blog','Blogs')}{link('/about','About')}</nav>
      <div class="nav-tools"><button class="icon-button" data-open-search aria-label="Search website">{icon('search')}</button><button class="icon-button" data-theme-toggle aria-label="Change color theme">{icon('theme')}</button><button class="icon-button menu-button" data-menu aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">{icon('menu')}</button></div></div></header>'''

def footer():
    groups = ''.join('<div class="footer-group"><h2>'+e(label)+'</h2>'+''.join(link(r,t) for r,t in rows)+'</div>' for label,rows in GROUPS.items())
    socials = button(CONFIG.get('github'), 'GitHub') + button(CONFIG.get('linkedin'), 'LinkedIn')
    if CONFIG.get('email'): socials += button('mailto:'+CONFIG['email'], 'Email')
    return f'''<section class="contact"><div class="wrap"><div><h2>Contact me</h2><p>Conversations about research, engineering, and collaboration.</p></div><div class="actions">{socials or link('/about','About & contact','button')}</div></div></section>
      <footer><div class="wrap"><div class="footer-grid">{link('/',CONFIG['initials'],'brand')}{groups}</div><div class="footer-bottom"><span>{e(CONFIG['name'])} © {date.today().year}</span><div>{link('/legal/terms','Terms')}{link('/legal/privacy-policy','Privacy')}{link('/legal/cookies','Cookies')}</div></div></div></footer>'''

def search_dialog():
    entries = [{'title': p['title'], 'section': p.get('section', ''), 'summary': p.get('summary',''), 'url': href(p['route'])} for p in PAGES]
    data = json.dumps(entries, ensure_ascii=False, separators=(',',':')).replace('<','\\u003c').replace('>','\\u003e').replace('&','\\u0026')
    return f'''<dialog class="search-dialog" data-search-dialog aria-labelledby="search-title"><div class="search-top"><h2 id="search-title">Search the website</h2><button class="icon-button" data-close-search aria-label="Close search">{icon('close')}</button></div><div class="search-field">{icon('search')}<input type="search" data-global-search aria-label="Search all pages" placeholder="Search research, projects, or topics…" autocomplete="off"></div><div class="search-results" data-search-results aria-live="polite"></div></dialog><script id="site-search-index" type="application/json">{data}</script>'''

def layout(page, content):
    title = CONFIG['name'] if page['route'] == '/' else page['title'] + ' · ' + CONFIG['name']
    description = page.get('summary') or CONFIG['tagline']
    canonical = f'<link rel="canonical" href="{e(ORIGIN + href(page["route"]))}">' if ORIGIN else ''
    noindex = '<meta name="robots" content="noindex,nofollow">' if CONFIG.get('template_mode',True) or not page.get('body') and page.get('kind') == 'detail' else ''
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{e(title)}</title><meta name="description" content="{e(description)}">{canonical}{noindex}<link rel="icon" type="image/svg+xml" href="{e(asset('assets/favicon.svg'))}"><link rel="stylesheet" href="{e(asset('assets/style.css'))}"><script>try{{document.documentElement.dataset.theme=localStorage.getItem('academic-theme')||'light'}}catch(e){{}}</script><script src="{e(asset('assets/app.js'))}" defer></script></head><body>{header()}<main id="main">{content}</main>{footer()}{search_dialog()}</body></html>'''

def feature(route,title,summary,mark,teal=False):
    return f'<a class="feature-card" href="{e(href(route))}"><div class="feature-art{" teal" if teal else ""}" aria-hidden="true">{mark}</div><div class="feature-body"><h3>{e(title)}</h3><p>{e(summary)}</p></div></a>'

def home():
    portrait = f'<img src="{e(external(CONFIG["portrait"]))}" alt="Portrait of {e(CONFIG["name"])}">' if CONFIG.get('portrait') else f'<span class="portrait-initials">{e(CONFIG["initials"])}</span>'
    actions = button(CONFIG.get('research_statement'),'Research statement',True)+button(CONFIG.get('cv'),'CV')
    if not actions: actions = link('/publications','Explore research','button primary')+link('/about','About me','button')
    roles = ''.join(f'<a class="role-card" href="{e(href(r))}"><span>{n}</span>{t}</a>' for r,t,n in ROLES)
    bio = ''.join(f'<p>{e(p)}</p>' for p in CONFIG['about'][:2])
    works = feature('/publications','Publications','Journal articles, conference papers, and research outputs.','∑ / ∂')+feature('/projects','Projects','Research questions, methods, and outcomes.','f(x)',True)
    books = feature('/books/topology-optimization','Topology optimization','A place for your notes, examples, and learning resources.','<span class="book-mark">Topology<br>optimization</span>',True)+feature('/books/phase-field-fracture','Phase-field fracture','A place for your modelling notes and practical examples.','<span class="book-mark">Phase-field<br>fracture</span>')
    news_items = [p for p in PAGES if p['route'].startswith('/news/') and p.get('body')]
    news = '<div class="empty-state">No updates have been published yet.</div>'
    if news_items:
        rows = ''.join(f'<tr><td>{e(p.get("date",""))}</td><td>{e(p.get("section","News"))}</td><td>{link(p["route"],p["title"])}</td></tr>' for p in sorted(news_items,key=lambda x:x.get('date',''),reverse=True)[:5])
        news = '<div class="table-wrap"><table class="news-table"><thead><tr><th>Date</th><th>Type</th><th>Update</th></tr></thead><tbody>'+rows+'</tbody></table></div>'
    template = '<span class="template-chip">Editable website template</span>' if CONFIG.get('template_mode') else ''
    return f'''<div class="wrap"><section class="hero"><div class="portrait-card"><div class="portrait-area">{portrait}</div><div class="portrait-caption">Research · Design<br>Model · Build</div></div><div class="hero-copy">{template}<p class="hello">Hi, I'm</p><h1>{e(CONFIG['name'])}</h1><p class="tagline">{e(CONFIG['tagline'])}</p><p class="position">{e(CONFIG['title'])}</p><div class="actions">{actions}</div></div></section>
      <section class="section"><div class="section-head"><h2>About</h2>{link('/about','Read more','text-link')}</div><div class="about-grid"><div class="body-copy">{bio}</div><aside class="bio-panel"><dl><div><dt>Location</dt><dd>{e(CONFIG['location'])}</dd></div><div><dt>Focus</dt><dd>{e(CONFIG['title'])}</dd></div><div><dt>Contact</dt><dd>{e(CONFIG.get('email') or 'Contact details to be added')}</dd></div></dl></aside></div><div class="role-grid">{roles}</div></section>
      <section class="section"><div class="section-head"><div><h2>Works</h2><p>Explore research publications and the projects behind them.</p></div>{link('/projects','See all works','text-link')}</div><div class="feature-grid">{works}</div></section>
      <section class="section"><div class="section-head"><div><h2>Books</h2><p>Notes and resources for learning, research, and practice.</p></div>{link('/books','See all books','text-link')}</div><div class="feature-grid">{books}</div></section>
      <section class="section"><div class="section-head"><div><h2>News</h2><p>Recent research updates, activities, and announcements.</p></div>{link('/news','See all news','text-link')}</div>{news}</section></div>'''

def page_header(page):
    route = page['route']
    parent = '/' + route.strip('/').split('/')[0]
    crumbs = link('/','Home')
    if parent in BY_ROUTE and parent != route: crumbs += '<span>/</span>'+link(parent,BY_ROUTE[parent]['title'])
    crumbs += '<span>/</span><span aria-current="page">'+e(page['title'])+'</span>'
    return '<div class="wrap page-header"><nav class="breadcrumbs" aria-label="Breadcrumb">'+crumbs+'</nav><p class="eyebrow">'+e(page.get('section','Portfolio'))+'</p><h1>'+e(page['title'])+'</h1>'+('<p>'+e(page['summary'])+'</p>' if page.get('summary') else '')+'</div>'

def collection(page):
    prefix = page.get('collect_prefix', page['route']) + '/'
    items = [p for p in PAGES if p['route'].startswith(prefix) and p['route'] != page['route']]
    if page['route'] == '/roles': items = [BY_ROUTE[r] for r,_,_ in ROLES]
    if page['route'] == '/categories': items = [p for p in PAGES if p['route'].startswith('/category/')]
    if page['route'] == '/eras': items = [p for p in PAGES if p['route'].startswith(('/education/','/experience/'))]
    items.sort(key=lambda x:x['route'],reverse=page['route'] in ['/news','blog'])
    cards = []
    for item in items:
        status = '' if item.get('body') or item.get('kind') == 'collection' else 'Awaiting your content'
        searchable = ' '.join([item['title'],item.get('summary',''),item.get('section','')]).lower()
        cards.append(f'<a class="card" data-card data-search="{e(searchable)}" data-category="{e(item.get("section",""))}" href="{e(href(item["route"]))}"><span class="card-label">{e(item.get("section","Page"))}</span><h2>{e(item["title"])}</h2>'+ (f'<p>{e(item["summary"])}</p>' if item.get('summary') else '')+f'<span class="card-bottom">{e(status)}</span></a>')
    categories = sorted(set(item.get('section','') for item in items))
    tabs = ''
    if len(categories)>1:
        tabs = '<div class="filter-tabs" role="group" aria-label="Filter by category"><button class="filter-tab" data-category-filter="all" aria-pressed="true">View all</button>'+''.join(f'<button class="filter-tab" data-category-filter="{e(c)}" aria-pressed="false">{e(c)}</button>' for c in categories)+'</div>'
    return page_header(page)+f'''<section class="wrap listing" data-collection><div class="collection-toolbar">{tabs}<div class="search-field">{icon('search')}<input data-filter type="search" placeholder="Search {e(page['title'].lower())}…" aria-label="Search {e(page['title'])}"></div><span class="result-count" data-count aria-live="polite">{len(items)} pages</span></div><div class="cards">{''.join(cards)}</div><div class="empty-state" data-no-results {'hidden' if items else ''}>No matching pages. Add content to this section when it is ready.</div><div class="pagination"><button class="button" data-prev>Previous</button><span data-page-label aria-live="polite">Page 1</span><button class="button" data-next>Next</button></div></section>'''

def blocks(body):
    out = []
    for block in body:
        if isinstance(block,str): out.append('<p>'+e(block)+'</p>')
        elif 'heading' in block: out.append('<h2>'+e(block['heading'])+'</h2>')
        elif 'list' in block: out.append('<ul>'+''.join('<li>'+e(t)+'</li>' for t in block['list'])+'</ul>')
        elif 'code' in block: out.append('<pre><code>'+e(block['code'])+'</code></pre>')
        elif 'image' in block: out.append('<figure><img loading="lazy" src="'+e(external(block['image']))+'" alt="'+e(block.get('alt',''))+'"><figcaption>'+e(block.get('caption',''))+'</figcaption></figure>')
        elif 'link' in block: out.append('<p><a class="text-link" href="'+e(external(block['link']))+'">'+e(block.get('label',block['link']))+'</a></p>')
        else: raise ValueError(f'Unknown body block: {block!r}')
    return ''.join(out)

def detail(page):
    body = page.get('body',[])
    if page['route'] == '/about': body = CONFIG['about']
    article = blocks(body) if body else '<div class="notice"><p>Content for this page has not been added yet.</p><p>This editable page preserves a route discovered on the reference website. Add your own material before presenting it as part of your portfolio.</p></div>'
    if page['route'] == '/about':
        article += '<h2>Contact</h2><p>'+e(CONFIG['location'])+'</p><div class="actions">'+button(CONFIG.get('github'),'GitHub')+button(CONFIG.get('linkedin'),'LinkedIn')+button('mailto:'+CONFIG['email'] if CONFIG.get('email') else '', 'Email')+'</div>'
    related = ''.join(link(r,t) for r,t in GROUPS['Core content'])
    return page_header(page)+'<div class="wrap article-grid"><article class="article">'+article+'</article><aside class="sidebar"><h2>Explore</h2>'+related+'</aside></div>'

def build(output):
    if len(BY_ROUTE) != len(PAGES): raise ValueError('Duplicate routes in pages.json')
    for page in PAGES: validate_route(page['route'])
    # Restrict output to a dedicated generated directory, never delete user sources.
    dest = (ROOT / output).resolve()
    if dest.parent != ROOT or dest.name not in {'docs','_site'}: raise ValueError('Output must be docs or _site inside this repository')
    if dest.exists(): shutil.rmtree(dest)
    dest.mkdir()
    shutil.copytree(ROOT/'assets',dest/'assets')
    for page in PAGES:
        path = dest / page['route'].strip('/') / 'index.html'
        path.parent.mkdir(parents=True,exist_ok=True)
        content = home() if page['route'] == '/' else collection(page) if page.get('kind') == 'collection' else detail(page)
        path.write_text(layout(page, content),encoding='utf-8')
    missing = {'route':'/404','title':'Page not found','section':'404','body':['The page you requested could not be found. Use the navigation or search to find another page.']}
    (dest/'404.html').write_text(layout(missing,detail(missing)),encoding='utf-8')
    (dest/'.nojekyll').touch()
    (dest/'build-info.json').write_text(json.dumps({'page_count':len(PAGES),'base_path':BASE,'template_mode':CONFIG.get('template_mode',True)},indent=2))
    if CONFIG.get('template_mode',True): robots='User-agent: *\nDisallow: /\n'
    else: robots='User-agent: *\nAllow: /\n'
    if ORIGIN and not CONFIG.get('template_mode',True):
        urls = ''.join('<url><loc>'+e(ORIGIN+href(p['route']))+'</loc></url>' for p in PAGES if p.get('body') or p.get('kind') != 'detail')
        (dest/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>',encoding='utf-8')
        robots+='Sitemap: '+ORIGIN+BASE+'/sitemap.xml\n'
    (dest/'robots.txt').write_text(robots)
    print(f'Built {len(PAGES)} routes and 404.html in {dest.name}; base_path={BASE or "/"}')

if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output',default='docs',choices=['docs','_site'])
    build(parser.parse_args().output)
