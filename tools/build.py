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
from urllib.parse import quote, urlsplit
from cv_content import make_pages, make_redirects

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / 'content/site.json').read_text(encoding='utf-8'))
PROFILE = json.loads((ROOT / 'content/profile.json').read_text(encoding='utf-8'))
RESEARCH = json.loads((ROOT / 'content/research.json').read_text(encoding='utf-8'))
CUSTOM_PAGES = json.loads((ROOT / 'content/pages.json').read_text(encoding='utf-8'))
PAGES = make_pages(PROFILE, CONFIG, RESEARCH, CUSTOM_PAGES)
BY_ROUTE = {page['route']: page for page in PAGES}
OLD_ROUTES = json.loads((ROOT / 'content/reference-routes.json').read_text(encoding='utf-8'))['routes']
REDIRECTS = make_redirects(OLD_ROUTES, PAGES)
BASE = os.environ.get('PAGES_BASE_PATH', CONFIG.get('base_path', '')).rstrip('/')
ORIGIN = os.environ.get('PAGES_ORIGIN', CONFIG.get('site_url', '')).rstrip('/')
if BASE and (not BASE.startswith('/') or '..' in BASE or '://' in BASE):
    raise ValueError('base_path must be empty or a path such as /my-website')

GROUPS = {
    'Home': [('/', 'Main page'), ('/join', 'Join'), ('/about', 'About'), ('/contact', 'Contact')],
    'Core content': [('/blog', 'Blogs'), ('/talks', 'Talks'), ('/projects', 'Projects'), ('/workshops', 'Workshops'), ('/publications', 'Publications')],
    'Curated': [('/books', 'Books & proceedings'), ('/codes', 'Codes & methods'), ('/frameworks', 'Frameworks'), ('/breakthrough-ideas', 'Research themes')],
    'Metadata': [('/eras', 'Eras'), ('/tags', 'Tags'), ('/roles', 'Roles'), ('/categories', 'Categories'), ('/research-areas', 'Research areas')],
    'Notables': [('/awards', 'Awards'), ('/news', 'Milestones'), ('/funding', 'Research support'), ('/experience', 'Experience'), ('/education', 'Education')]
}
NAV = {'Research': [('/publications', 'Publications'), ('/projects', 'Projects'), ('/research-areas', 'Research areas'), ('/talks', 'Talks')],
       'Codes': [('/codes', 'Codes & methods'), ('/codes/topology-optimization', 'Topology optimization'), ('/codes/fenics', 'FEniCS'), ('/applications', 'Applications')],
       'Highlights': [('/news', 'News'), *GROUPS['Notables']]}
ROLES = [('/roles/scientist', 'Scientist C · CSIR-CRRI', '01'), ('/roles/educator', 'Academic & educator', '02'), ('/roles/computational-researcher', 'Computational researcher', '03'), ('/roles/bridge-engineer', 'Bridge engineer', '04')]

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
      {link('/', CONFIG['initials'], 'brand')}<nav class="nav-links" data-nav id="primary-nav" aria-label="Main navigation">{menus}{link('/blog','Blogs')}{link('/join','Join','nav-join')}{link('/about','About')}</nav>
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
    noindex = '<meta name="robots" content="noindex,follow">' if CONFIG.get('template_mode',True) or page.get('noindex') else ''
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{e(title)}</title><meta name="description" content="{e(description)}">{canonical}{noindex}<link rel="icon" type="image/svg+xml" href="{e(asset('assets/favicon.svg'))}"><link rel="stylesheet" href="{e(asset('assets/style.css'))}"><script>try{{document.documentElement.dataset.theme=localStorage.getItem('academic-theme')||'light'}}catch(e){{}}</script><script src="{e(asset('assets/app.js'))}" defer></script></head><body>{header()}<main id="main">{content}</main>{footer()}{search_dialog()}</body></html>'''

def feature(route,title,summary,mark,teal=False):
    return f'<a class="feature-card" href="{e(href(route))}"><div class="feature-art{" teal" if teal else ""}" aria-hidden="true">{mark}</div><div class="feature-body"><h3>{e(title)}</h3><p>{e(summary)}</p></div></a>'

def home():
    portrait = f'<img src="{e(external(CONFIG["portrait"]))}" alt="Portrait of {e(CONFIG["name"])}">' if CONFIG.get('portrait') else f'<span class="portrait-initials">{e(CONFIG["initials"])}</span>'
    actions = button(CONFIG.get('research_statement'),'Research statement',True)+button(CONFIG.get('cv'),'CV')
    if not actions: actions = link('/publications','Explore research','button primary')+link('/about','About me','button')
    roles = ''.join(f'<a class="role-card" href="{e(href(r))}"><span>{n}</span>{t}</a>' for r,t,n in ROLES)
    bio = ''.join(f'<p>{e(p)}</p>' for p in CONFIG['about'][:2])
    works = feature('/publications','Publications','Topology optimization, mechanical metamaterials, uncertainty, and structural dynamics.',str(len(PROFILE['publications']))+' articles')+feature('/projects','Research & consultancy','Bridge assessment, structural audits, AI-based distress assessment, and seismic performance.',str(len(PROFILE['research_projects'])+len(PROFILE['consultancy']))+' projects',True)
    selected = [next((p for p in PAGES if p.get('record_type')==kind),None) for kind in ['publication','research']]
    featured = ''.join('<a class="home-record" href="'+e(href(p['route']))+'"><span class="profile-kicker accent">'+e(' · '.join(x for x in [p.get('date',''),p['section']] if x))+'</span><h3>'+e(p['title'])+'</h3><p>'+e(p['summary'])+'</p><span class="text-link">Read record</span></a>' for p in selected if p)
    books = ''.join('<article class="home-book"><div><p class="profile-kicker accent">'+e(p['summary'])+'</p><h3>'+e(p['title'])+'</h3><p>Books/proceedings contribution listed in my CV.</p></div>'+link(p['route'],'View record','button')+'</article>' for p in PAGES if p.get('record_type')=='book')
    book_section = '<section class="section"><div class="section-head"><h2>Books & proceedings</h2>'+link('/books','See all records','text-link')+'</div>'+books+'</section>' if books else ''
    news_items = [p for p in PAGES if p.get('news_type')]
    news = '<div class="empty-state">No updates have been published yet.</div>'
    if news_items:
        rows = ''.join(f'<tr><td>{e(p.get("date",""))}</td><td>{e(p["news_type"])}</td><td>{link(p["route"],p["title"])}</td></tr>' for p in sorted(news_items,key=lambda x:x.get('date',''),reverse=True)[:5])
        news = '<div class="table-wrap"><table class="news-table"><thead><tr><th scope="col">Year</th><th scope="col">Type</th><th scope="col">Milestone</th></tr></thead><tbody>'+rows+'</tbody></table></div>'
    template = '<span class="template-chip">Editable website template</span>' if CONFIG.get('template_mode') else ''
    return f'''<div class="wrap"><section class="hero"><div class="portrait-card"><div class="portrait-area">{portrait}</div><div class="portrait-caption">Research · Design<br>Model · Build</div></div><div class="hero-copy">{template}<p class="hello">Hi, I'm</p><h1>{e(CONFIG['name'])}</h1><p class="tagline">{e(CONFIG['tagline'])}</p><p class="position">{e(CONFIG['title'])}</p><div class="actions">{actions}</div></div></section>
      <section class="section"><div class="section-head"><h2>About</h2>{link('/about','Read more','text-link')}</div><div class="about-grid"><div class="body-copy">{bio}</div><aside class="bio-panel"><dl><div><dt>Location</dt><dd>{e(CONFIG['location'])}</dd></div><div><dt>Focus</dt><dd>{e(CONFIG['title'])}</dd></div><div><dt>Contact</dt><dd>{e(CONFIG.get('email') or 'Contact details to be added')}</dd></div></dl></aside></div><div class="role-grid">{roles}</div></section>
      <section class="section"><div class="section-head"><div><h2>Works</h2><p>Explore research publications and the projects behind them.</p></div>{link('/projects','See all works','text-link')}</div><div class="feature-grid">{works}</div></section>
      <section class="section"><div class="section-head"><div><h2>Research in focus</h2><p>From computational material design to the assessment of bridges.</p></div>{link('/research-areas','Research areas','text-link')}</div><div class="feature-grid">{featured}</div></section>
      {book_section}
      <section class="section"><div class="section-head"><div><h2>News & milestones</h2><p>Publications, appointments, education, and recognition recorded in my CV.</p></div>{link('/news','See all milestones','text-link')}</div>{news}</section></div>'''

def page_header(page):
    route = page['route']
    parent = '/' + route.strip('/').split('/')[0]
    crumbs = link('/','Home')
    if parent in BY_ROUTE and parent != route: crumbs += '<span>/</span>'+link(parent,BY_ROUTE[parent]['title'])
    crumbs += '<span>/</span><span aria-current="page">'+e(page['title'])+'</span>'
    return '<div class="wrap page-header"><nav class="breadcrumbs" aria-label="Breadcrumb">'+crumbs+'</nav><p class="eyebrow">'+e(page.get('section','Portfolio'))+'</p><h1>'+e(page['title'])+'</h1>'+('<p>'+e(page['summary'])+'</p>' if page.get('summary') else '')+'</div>'

def collection(page):
    prefix = page.get('collect_prefix', page['route']) + '/'
    if 'items' in page:
        items = [BY_ROUTE[r] for r in page['items']]
    else:
        items = [p for p in PAGES if p['route'].startswith(prefix) and p['route'] != page['route'] and (p.get('record_type') if page.get('direct_records') else '/' not in p['route'][len(prefix):])]
    if any(p.get('date') for p in items): items.sort(key=lambda x:x.get('date',''),reverse=True)
    introduction = '<div class="collection-intro article">'+blocks(page.get('body',[]))+'</div>' if page.get('body') else ''
    if not items:
        message = page.get('empty_message','No records have been published in this section yet.')
        page['noindex'] = True
        return page_header(page)+'<section class="wrap listing">'+introduction+'<div class="honest-empty"><h2>'+e(page['title'])+'</h2><p>'+e(message)+'</p><div class="actions">'+link('/publications','Explore publications','button primary')+link('/contact','Contact me','button')+'</div></div></section>'
    cards = []
    for item in items:
        status = item.get('status') or item.get('date') or 'View details'
        searchable = ' '.join([item['title'],item.get('summary',''),item.get('section',''),str(item.get('body',[]))]).lower()
        cards.append(f'<a class="card" data-card data-search="{e(searchable)}" data-category="{e(item.get("section",""))}" href="{e(href(item["route"]))}"><span class="card-label">{e(item.get("section","Page"))}</span><h2>{e(item["title"])}</h2>'+ (f'<p>{e(item["summary"])}</p>' if item.get('summary') else '')+f'<span class="card-bottom">{e(status)}</span></a>')
    categories = sorted(set(item.get('section','') for item in items))
    tabs = ''
    if len(categories)>1:
        tabs = '<div class="filter-tabs" role="group" aria-label="Filter by category"><button class="filter-tab" data-category-filter="all" aria-pressed="true">View all</button>'+''.join(f'<button class="filter-tab" data-category-filter="{e(c)}" aria-pressed="false">{e(c)}</button>' for c in categories)+'</div>'
    return page_header(page)+f'''<section class="wrap listing" data-collection>{introduction}<div class="collection-toolbar">{tabs}<div class="search-field">{icon('search')}<input data-filter type="search" placeholder="Search {e(page['title'].lower())}…" aria-label="Search {e(page['title'])}"></div><span class="result-count" data-count aria-live="polite">{len(items)} records</span></div><div class="cards">{''.join(cards)}</div><div class="empty-state" data-no-results hidden>No matching records. Try another keyword or category.</div><div class="pagination"><button class="button" data-prev>Previous</button><span data-page-label aria-live="polite">Page 1</span><button class="button" data-next>Next</button></div></section>'''

def blocks(body):
    out = []
    for block in body:
        if isinstance(block,str): out.append('<p>'+e(block)+'</p>')
        elif 'heading' in block: out.append('<h2>'+e(block['heading'])+'</h2>')
        elif 'list' in block: out.append('<ul>'+''.join('<li>'+e(t)+'</li>' for t in block['list'])+'</ul>')
        elif 'facts' in block: out.append('<dl class="record-facts">'+''.join('<div><dt>'+e(k)+'</dt><dd>'+e(v)+'</dd></div>' for k,v in block['facts'])+'</dl>')
        elif 'route' in block: out.append('<p>'+link(block['route'],block.get('label',block['route']),'text-link')+'</p>')
        elif 'code' in block: out.append('<pre><code>'+e(block['code'])+'</code></pre>')
        elif 'image' in block: out.append('<figure><img loading="lazy" src="'+e(external(block['image']))+'" alt="'+e(block.get('alt',''))+'"><figcaption>'+e(block.get('caption',''))+'</figcaption></figure>')
        elif 'link' in block: out.append('<p><a class="text-link" href="'+e(external(block['link']))+'">'+e(block.get('label',block['link']))+'</a></p>')
        else: raise ValueError(f'Unknown body block: {block!r}')
    return ''.join(out)

def detail(page):
    body = page.get('body',[])
    if page['route'] == '/about': body = CONFIG['about']
    article = blocks(body) if body else '<div class="notice"><p>No further details are currently published for this record.</p></div>'
    if page.get('topics'):
        article += '<h2>Related research areas</h2><div class="topic-links">'+''.join(link(t['route'],t['label'],'profile-badge') for t in page['topics'])+'</div>'
    if page['route'] == '/about':
        article += '<h2>Contact</h2><p>'+e(CONFIG['location'])+'</p><div class="actions">'+button(CONFIG.get('github'),'GitHub')+button(CONFIG.get('linkedin'),'LinkedIn')+button('mailto:'+CONFIG['email'] if CONFIG.get('email') else '', 'Email')+'</div>'
    related = ''.join(link(r,t) for r,t in GROUPS['Core content'])
    return page_header(page)+'<div class="wrap article-grid"><article class="article">'+article+'</article><aside class="sidebar"><h2>Explore</h2>'+related+'</aside></div>'

def profile_section(id_, title, content, subtitle=''):
    return f'<section class="profile-section" id="{e(id_)}" aria-labelledby="{e(id_)}-title"><div class="profile-section-label"><h2 id="{e(id_)}-title">{e(title)}</h2>'+ (f'<p>{e(subtitle)}</p>' if subtitle else '')+f'</div><div class="profile-section-content">{content}</div></section>'

def about_page():
    paragraphs = ''.join(f'<p>{e(p)}</p>' for p in PROFILE['philosophy'])
    if CONFIG.get('portrait'):
        visual = f'<img class="profile-photo" src="{e(external(CONFIG["portrait"]))}" alt="Portrait of {e(CONFIG["name"])}" width="600" height="680">'
    else:
        visual = f'<div class="profile-monogram" aria-hidden="true">{e(CONFIG["initials"])}</div>'
    identity = f'''<aside class="profile-identity" aria-label="Profile of {e(CONFIG['name'])}">{visual}<div class="profile-identity-copy"><p class="profile-kicker">Scientist · Engineer · Educator</p><h2>{e(CONFIG['name'])}</h2><p>{e(CONFIG['title'])}</p><div class="profile-identity-rule"></div><p>{e(PROFILE['division'])}<br>{e(PROFILE['institution'])}<br>{e(CONFIG['location'])}</p><a href="mailto:{e(CONFIG['email'])}">{e(CONFIG['email'])}</a></div></aside>'''
    actions = '<a class="button primary" href="#research">Research interests</a>'+button(CONFIG.get('cv'), 'Download CV')+button('mailto:'+CONFIG['email'], 'Contact me')
    jump_links = ''.join(f'<a href="#{id_}">{label}</a>' for id_,label in [('experience','Experience'),('education','Education'),('research','Research'),('publications','Publications'),('projects','Projects'),('awards','Awards'),('conferences','Conferences')])
    output = f'<div class="wrap profile-page"><section class="profile-hero"><div class="profile-intro"><p class="profile-kicker accent">My work philosophy</p><h1>{e(PROFILE["heading"])}</h1>{paragraphs}<div class="actions">{actions}</div></div>{identity}</section><nav class="profile-jump" aria-label="About page sections">{jump_links}</nav>'
    experience = ''.join(f'''<article class="experience-card"><div class="experience-card-head"><span class="institution-mark" aria-hidden="true">{e(item['short'])}</span><div><h3>{e(item['title'])}</h3><p>{e(item['location'])}</p></div></div><p class="experience-institution">{e(item['institution'])}</p><p class="experience-detail">{e(item['detail'])}</p><div class="experience-card-foot"><span class="profile-badge">{e(item['short'])}</span><span>{e(item['period'])}</span></div></article>''' for item in PROFILE['experience'])
    output += profile_section('experience','Experience','<div class="experience-grid">'+experience+'</div>')
    education = ''.join(f'''<article class="education-card"><div class="education-top"><p class="profile-kicker accent">{e(item['degree'])}</p><span class="profile-badge">{e(item['year'])}</span></div><h3>{e(item['subject'])}</h3><p>{e(item['institution'])}</p><span class="education-division">{e(item['division'])}</span></article>''' for item in PROFILE['education'])
    output += profile_section('education','Education','<div class="profile-stack">'+education+'</div>')
    interests = ''.join('<li>'+e(item)+'</li>' for item in PROFILE['interests'])
    output += profile_section('research','Research interests','<ul class="research-chips">'+interests+'</ul>')
    publications = ''.join(f'''<li class="record-item"><div class="record-meta"><span class="profile-badge">{e(item['year'])}</span><span>Journal article</span></div><h3>{e(item['title'])}</h3><p>{e(item['authors'])}</p><p class="record-venue">{e(item['journal'])} · {e(item['volume'])}</p></li>''' for item in PROFILE['publications'])
    output += profile_section('publications','Publications','<ol class="record-list">'+publications+'</ol>','Journal articles listed in my CV')
    projects = ''.join(f'''<article class="project-record"><div class="record-meta"><span class="profile-badge">{e(item['role'])}</span><span>{e(item['code'])}</span></div><h3>{e(item['title'])}</h3><p>{e(item['programme'])}</p></article>''' for item in PROFILE['research_projects'])
    output += profile_section('projects','Research projects','<div class="profile-stack">'+projects+'</div>')
    consultancy = ''.join(f'''<li class="record-item"><div class="record-meta"><span class="profile-badge">{e(item['code'])}</span><span>{e(item['role'])}</span></div><h3>{e(item['title'])}</h3><p>{e(item['client_or_context'])}</p></li>''' for item in PROFILE['consultancy'])
    output += profile_section('consultancy','Consultancy','<details class="cv-disclosure"><summary>View all '+str(len(PROFILE['consultancy']))+' consultancy projects</summary><ol class="record-list">'+consultancy+'</ol></details>','Bridge assessment, structural audits, and engineering review')
    awards = ''.join(f'''<li class="award-row"><span class="award-year">{e(item['year'])}</span><div><h3>{e(item['title'])}</h3><p>{e(item['institution'])}</p></div></li>''' for item in PROFILE['awards'])
    output += profile_section('awards','Awards & fellowships','<ul class="award-list">'+awards+'</ul>')
    books = ''.join(f'''<article class="education-card"><div class="record-meta"><span class="profile-badge">{e(item['year'])}</span><span>{e(item['publisher'])}</span></div><h3>{e(item['title'])}</h3></article>''' for item in PROFILE['books'])
    output += profile_section('books-record','Books & proceedings',books,'Contribution listed in my CV')
    conferences = []
    for item in PROFILE['conferences']:
        status = f'<span class="profile-badge">{e(item["status"])} · per CV</span>' if item.get('status') else ''
        meta = ' · '.join(part for part in [item['event'],item['location'],item['date']] if part)
        conferences.append(f'<li class="record-item">{status}<h3>{e(item["title"])}</h3><p>{e(item["authors"])}</p><p class="record-venue">{e(meta)}</p></li>')
    output += profile_section('conferences','Conferences','<details class="cv-disclosure"><summary>View all '+str(len(conferences))+' conference contributions</summary><ol class="record-list">'+''.join(conferences)+'</ol></details>','Includes three abstracts listed as accepted in the supplied CV')
    contact = f'''<div class="profile-contact"><h3>Let’s discuss research and collaboration.</h3><p>{e(PROFILE['division'])}<br>{e(PROFILE['institution'])}<br>{e(PROFILE['address'])}</p><div class="contact-emails"><a href="mailto:{e(CONFIG['email'])}">{e(CONFIG['email'])}</a><a href="mailto:{e(PROFILE['secondary_email'])}">{e(PROFILE['secondary_email'])}</a></div><div class="actions">{link('/join','Join & collaborate','button primary')}{button(CONFIG.get('github'),'GitHub')}</div></div>'''
    output += profile_section('contact-details','Contact',contact)
    return output+'</div>'

def join_page():
    data = PROFILE['join']
    intro = f'''<section class="join-hero" id="join_us"><p class="profile-kicker accent">Join & collaborate</p><h1>{e(data['heading'])}</h1><p>{e(data['introduction'])}</p><div class="actions"><a class="button primary" href="#opportunities">Explore enquiries</a>{button('mailto:'+CONFIG['email'],'Email me')}</div></section>'''
    cards = []
    for index,item in enumerate(data['opportunities'],1):
        topics = ''.join('<li>'+e(topic)+'</li>' for topic in item['topics'])
        mail = 'mailto:'+CONFIG['email']+'?subject='+quote(item['subject'])
        cards.append(f'''<article class="join-card"><div class="join-card-top"><span class="join-number">{index:02d}</span><p class="profile-kicker">{e(item['label'])}</p></div><h3>{e(item['title'])}</h3><ul class="join-topics">{topics}</ul><p class="join-description">{e(item['description'])}</p><div class="join-card-action">{button(mail,'Discuss this opportunity')}</div></article>''')
    opportunities = '<section id="opportunities" class="join-opportunities" aria-labelledby="opportunities-title"><div class="section-head"><div><h2 id="opportunities-title">Ways to work together</h2><p>Enquiries across education, research, and engineering practice.</p></div></div><div class="join-grid">'+''.join(cards)+'</div></section>'
    instructions = '<ol class="join-checklist">'+''.join('<li>'+e(line)+'</li>' for line in data['what_to_send'])+'</ol>'
    apply = f'''<section class="join-contact" id="get-in-touch"><div><p class="profile-kicker accent">Start with an email</p><h2>Tell me what you’d like to explore.</h2>{instructions}</div><aside class="join-email-panel"><h3>{e(CONFIG['name'])}</h3><p>{e(CONFIG['title'])}</p><a class="join-email" href="mailto:{e(CONFIG['email'])}">{e(CONFIG['email'])}</a><p>{e(PROFILE['division'])}<br>{e(PROFILE['institution'])}<br>{e(PROFILE['address'])}</p>{button('mailto:'+CONFIG['email']+'?subject=Research%20enquiry','Write an enquiry',True)}</aside></section>'''
    notice = '<aside class="join-notice" aria-label="Availability and institutional processes"><h2>Before you enquire</h2><p>'+e(data['notice'])+'</p></aside>'
    return '<div class="wrap join-page">'+intro+notice+opportunities+apply+'</div>'

def build(output):
    if len(BY_ROUTE) != len(PAGES): raise ValueError('Duplicate routes in pages.json')
    for page in PAGES: validate_route(page['route'])
    for route in REDIRECTS: validate_route(route)
    # Restrict output to a dedicated generated directory, never delete user sources.
    dest = (ROOT / output).resolve()
    if dest.parent != ROOT or dest.name not in {'docs','_site'}: raise ValueError('Output must be docs or _site inside this repository')
    if dest.exists(): shutil.rmtree(dest)
    dest.mkdir()
    shutil.copytree(ROOT/'assets',dest/'assets')
    for page in PAGES:
        path = dest / page['route'].strip('/') / 'index.html'
        path.parent.mkdir(parents=True,exist_ok=True)
        content = home() if page['route'] == '/' else about_page() if page['route'] == '/about' else join_page() if page['route'] == '/join' else collection(page) if page.get('kind') == 'collection' else detail(page)
        path.write_text(layout(page, content),encoding='utf-8')
    for route,target in REDIRECTS.items():
        path=dest/route.strip('/')/'index.html';path.parent.mkdir(parents=True,exist_ok=True)
        destination=href(target);title=BY_ROUTE[target]['title']
        path.write_text(f'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0; url={e(destination)}"><link rel="canonical" href="{e(ORIGIN+destination)}"><link rel="stylesheet" href="{e(asset("assets/style.css"))}"><title>{e(title)} · {e(CONFIG["name"])}</title></head><body><main class="wrap page-header"><h1>Continue to {e(title)}</h1><p>This address now leads to the updated portfolio section.</p>{link(target,"Continue","button primary")}</main></body></html>',encoding='utf-8')
    missing = {'route':'/404','title':'Page not found','section':'404','noindex':True,'body':['The page you requested could not be found. Use the navigation or search to find another page.']}
    (dest/'404.html').write_text(layout(missing,detail(missing)),encoding='utf-8')
    (dest/'.nojekyll').touch()
    (dest/'build-info.json').write_text(json.dumps({'page_count':len(PAGES)+len(REDIRECTS),'content_pages':len(PAGES),'legacy_redirects':len(REDIRECTS),'base_path':BASE,'template_mode':CONFIG.get('template_mode',True)},indent=2))
    (dest/'route-manifest.json').write_text(json.dumps({'pages':[{'route':p['route'],'title':p['title'],'kind':p.get('kind','detail')} for p in PAGES],'redirects':REDIRECTS},indent=2))
    if CONFIG.get('template_mode',True): robots='User-agent: *\nDisallow: /\n'
    else: robots='User-agent: *\nAllow: /\n'
    if ORIGIN and not CONFIG.get('template_mode',True):
        urls = ''.join('<url><loc>'+e(ORIGIN+href(p['route']))+'</loc></url>' for p in PAGES if not p.get('noindex'))
        (dest/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>',encoding='utf-8')
        robots+='Sitemap: '+ORIGIN+BASE+'/sitemap.xml\n'
    (dest/'robots.txt').write_text(robots)
    print(f'Built {len(PAGES)} content pages, {len(REDIRECTS)} legacy redirects, and 404.html in {dest.name}; base_path={BASE or "/"}')

if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output',default='docs',choices=['docs','_site'])
    build(parser.parse_args().output)
