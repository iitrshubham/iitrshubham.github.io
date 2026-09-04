"""Derive the public portfolio from a single CV record, without invented achievements."""
from __future__ import annotations
import re


def slug(value):
    return re.sub(r'[^a-z0-9]+', '-', value.lower()).strip('-')


def make_pages(profile, config, research, custom):
    pages = []

    def page(route, title, section, summary='', body=None, kind='detail', **kwargs):
        result = dict(route=route, title=title, section=section, summary=summary,
                      kind=kind, body=body or [], **kwargs)
        pages.append(result)
        return result

    def collection(route, title, section, summary, **kwargs):
        return page(route, title, section, summary, kind='collection', **kwargs)

    page('/', 'Home', 'Profile', config['introduction'], kind='home')
    page('/about', 'About', 'Profile', config['introduction'], kind='profile')
    page('/join', 'Join', 'Collaboration', profile['join']['introduction'], kind='join')
    collection('/publications', 'Publications', 'Research', 'Journal articles in topology optimization, metamaterials, uncertainty, and computational mechanics.')
    collection('/projects', 'Projects', 'Research & consultancy', f"{len(profile['research_projects'])} research projects and {len(profile['consultancy'])} consultancy assignments in bridge and structural engineering.", direct_records=True)
    collection('/projects/research', 'Research projects', 'Research', 'Research programmes at CSIR-Central Road Research Institute.')
    collection('/projects/consultancy', 'Consultancy projects', 'Consultancy', 'Bridge condition assessment, structural audits, quality audits, and engineering review.')
    collection('/experience', 'Experience', 'Career', 'Research, academic, and teaching appointments.')
    collection('/education', 'Education', 'Career', 'Qualifications in structural and civil engineering.')
    collection('/awards', 'Awards & fellowships', 'Recognition', 'Awards, travel support, and fellowships listed in my CV.')
    collection('/talks', 'Talks & conference contributions', 'Engagement', 'Conference contributions, including abstracts recorded as accepted in the supplied CV.')
    collection('/books', 'Books & proceedings', 'Research', 'A books/proceedings contribution listed in my CV.')

    records = []
    for item in profile['publications']:
        route = '/publications/' + item.get('id', slug(item['year']+'-'+item['title']))
        body = [item.get('description','Research publication: '+item['title']+'.'),
                {'facts': [['Authors', item['authors']], ['Journal', item['journal']],
                           ['Volume / article / pages', item['volume']], ['Year', item['year']]]},
                {'heading': 'Citation'},
                f"{item['authors']} ({item['year']}). {item['title']}. {item['journal']}, {item['volume']}."]
        if item.get('url'): body.append({'link': item['url'], 'label': 'Read on the publisher’s website'})
        record = page(route, item['title'], 'Journal article', item['journal']+' · '+item['year'], body,
                      date=item['year'], record_type='publication', news_type='Publication')
        records.append(record)

    for group, segment, section in [('research_projects','research','Research project'), ('consultancy','consultancy','Consultancy')]:
        for item in profile[group]:
            facts = [['Role',item['role']], ['Project reference',item['code']]]
            if group == 'research_projects': facts += [['Programme',item['programme']]]
            else: facts += [['Location / context',item['client_or_context']]]
            body = [{'facts': facts}, {'heading': 'Project scope'}, item['title']+'.']
            if group == 'consultancy': body.append(item['client_or_context']+'.')
            body += [{'heading': 'My contribution'}, f"Role recorded in my CV: {item['role']}.",
                     {'route': '/contact', 'label': 'Discuss this work'}]
            records.append(page('/projects/'+segment+'/'+slug(item['code']),item['title'],section,
                                item['role']+' · '+item['code'],body,record_type=segment))

    for i,item in enumerate(profile['experience']):
        route='/experience/'+slug(item['short']+'-'+item['title']+'-'+item['period'].split(' ')[0])
        body=[{'facts': [['Position',item['title']],['Institution',item['institution']],
                        ['Location',item['location']],['Period',item['period']]]},item['detail']+'.']
        records.append(page(route,item['title']+' · '+item['short'],'Appointment',item['institution']+' · '+item['period'],body,
                            record_type='experience',date=item['period'][:4],news_type='Appointment'))
    for item in profile['education']:
        records.append(page('/education/'+slug(item['degree']+'-'+item['year']),item['degree']+' in '+item['subject'],
                            'Education',item['institution']+' · '+item['year'],
                            [{'facts':[['Degree',item['degree']],['Subject',item['subject']],['Institution',item['institution']],
                                       ['Year',item['year']],['Division',item['division']]]}],
                            record_type='education',date=item['year'],news_type='Education'))
    for i,item in enumerate(profile['awards'],1):
        records.append(page('/awards/'+item.get('id',slug(item['year']+'-'+item['title']+'-'+item['institution'])),item['title'],
                            'Award' if 'Award' in item['title'] else 'Fellowship & support',item['institution']+' · '+item['year'],
                            [{'facts':[['Award / support',item['title']],['Awarding organisation',item['institution']],['Year',item['year']]]}],
                            record_type='award',date=item['year'],news_type='Recognition'))
    for i,item in enumerate(profile['conferences'],1):
        body=[{'facts':[['Authors',item['authors']],['Conference',item['event']],['Location',item['location']]]}]
        if item['date']: body[0]['facts'].append(['Date / year',item['date']])
        if item.get('status'):
            body[0]['facts'].append(['Status in CV',item['status']])
            body.append('The supplied CV records this contribution as an accepted abstract; a delivered presentation is not confirmed here.')
        body += [{'heading':'Contribution topic'},item['title']+'.',{'route':'/contact','label':'Enquire about this contribution'}]
        years=re.findall(r'\b(?:19|20)\d{2}\b',item['date']+' '+item['event'])
        records.append(page('/talks/'+item.get('id',slug(item['title'])),item['title'],
                            'Accepted abstract' if item.get('status') else 'Conference contribution',
                            item['event']+' · '+item['location']+((' · '+item['date']) if item['date'] else ''),body,
                            record_type='conference',date=years[0] if years else '',status=item.get('status','')))
    for item in profile['books']:
        records.append(page('/books/'+item.get('id',slug(item['title'])),item['title'],'Books & proceedings',
                            item['publisher']+' · '+item['year'],
                            [{'facts':[['Title',item['title']],['Publisher',item['publisher']],['Year',item['year']]]},
                             'This title is listed under books, reports, chapters, and general articles in my CV.',
                             {'route':'/contact','label':'Enquire about this contribution'}],record_type='book',date=item['year']))

    research_records=[p for p in records if p['record_type'] in ('publication','research','consultancy','conference')]
    def matching(spec):
        return [p['route'] for p in research_records if any(word.lower() in (p['title']+' '+p['summary']).lower() for word in spec['match'])]
    collection('/research-areas','Research areas','Research','Topics connecting computational mechanics, structural design, and bridge assessment.')
    collection('/tags','Topics & tags','Metadata','Browse related records by research topic.')
    for spec in research['areas']:
        selected=matching(spec)
        collection('/research-areas/'+spec['id'],spec['title'],'Research area',spec['summary'],items=selected,
                   body=[spec['summary']],empty_message='This is a stated research interest. Specific publications or project descriptions for this topic are not listed yet.')
        collection('/tags/'+spec['id'],spec['title'],'Topic',spec['summary'],items=selected,
                   empty_message='This topic is listed among my interests; no matching detailed records are currently published.')
        for record in research_records:
            if record['route'] in selected: record.setdefault('topics',[]).append({'route':'/research-areas/'+spec['id'],'label':spec['title']})

    collection('/codes','Codes & numerical methods','Computational research',
               'Research methods and associated records. Released code, when available, is shared through my GitHub profile.',
               body=[{'link':config['github'],'label':'Visit my GitHub profile'},
                     'The entries below describe methods appearing in my research record; they are not claims of downloadable software packages.'])
    for spec in research['methods']:
        collection('/codes/'+spec['id'],spec['title'],'Method',spec['summary'],items=matching(spec),
                   body=[{'link':config['github'],'label':'Visit GitHub for released code'}])
    collection('/frameworks','Methods & frameworks','Research',
               'Computational approaches represented in my publications and conference contributions.',
               items=[p['route'] for p in pages if p['route'].startswith('/codes/')])
    for key,root,title,section in [('applications','/applications','Applications','Engineering practice'),
                                    ('themes','/breakthrough-ideas','Research themes','Research')]:
        collection(root,title,section,'Explore related publications, projects, and conference contributions.')
        for spec in research[key]: collection(root+'/'+spec['id'],spec['title'],section,spec['summary'],items=matching(spec),body=[spec['summary']])

    categories=[('journal-articles','Journal articles',['publication']),('research-projects','Research projects',['research']),
                ('consultancy','Engineering consultancy',['consultancy']),('conference-contributions','Conference contributions',['conference'])]
    collection('/categories','Categories','Metadata','Browse research records by the type of contribution.',items=['/category/'+x[0] for x in categories])
    collection('/category','Categories','Metadata','Research and engineering contribution types.',items=['/category/'+x[0] for x in categories])
    for id_,title,types in categories:
        collection('/category/'+id_,title,'Category','Published records in this category.',items=[p['route'] for p in records if p['record_type'] in types])

    roles=[('scientist','Scientist C','CSIR-CRRI, Bridge Engineering and Structures Division.',
            [p['route'] for p in records if p['record_type'] in ('research','consultancy')]),
           ('educator','Academic & educator','Assistant Professor at AcSIR; earlier guest lecturer appointments in Delhi.',
            [p['route'] for p in records if p['record_type']=='experience' and any(x in p['title'] for x in ['Professor','Lecturer'])]),
           ('computational-researcher','Computational researcher','Research in topology optimization, metamaterials, uncertainty, and structural dynamics.',
            [p['route'] for p in records if p['record_type']=='publication']),
           ('bridge-engineer','Bridge engineer','Bridge research, condition assessment, and structural audit assignments.',
            [p['route'] for p in records if p['record_type'] in ('research','consultancy')])]
    collection('/roles','Roles','Career','Research, engineering, academic, and teaching contributions.')
    for id_,title,summary,items in roles: collection('/roles/'+id_,title,'Role',summary,items=items,body=[summary])
    collection('/eras','Academic & professional journey','Career','Education and appointments, using the years recorded in my CV.',
               items=[p['route'] for p in records if p['record_type'] in ('experience','education')])
    collection('/news','News & milestones','Updates','Appointments, qualifications, publications, and recognition. Years are shown where exact dates are not provided in the CV.',
               items=[p['route'] for p in records if p.get('news_type')])
    collection('/funding','Fellowships & research support','Research support',
               'Listed fellowships, travel/conference support, and research programmes. Funding amounts are not specified in the CV.',
               items=[p['route'] for p in records if p['record_type']=='research' or p['section']=='Fellowship & support'])
    page('/research-vision','Research direction','Research',profile['heading'],
         profile['philosophy']+[{'heading':'Areas of interest'},{'list':profile['interests']},{'route':'/join','label':'Explore collaboration enquiries'}])
    page('/contact','Contact','Profile','Research, student project, and engineering collaboration enquiries.',
         [config['name'],config['title'],profile['division'],profile['institution'],profile['address'],
          {'link':'mailto:'+config['email'],'label':config['email']},
          {'link':'mailto:'+profile['secondary_email'],'label':profile['secondary_email']},
          {'link':config['github'],'label':'GitHub: iitrshubham'},{'route':'/join','label':'Join & collaborate'}])
    page('/legal/terms','Website information','Website','About this personal academic portfolio.',
         ['This is the personal academic website of '+config['name']+'. It is not an official website of CSIR-CRRI or AcSIR.',
          'The content summarises professional and research records. It is not a substitute for a project-specific engineering assessment or an institutional approval.',
          'Links to publications lead to their publishers. Linked material remains subject to its own access and reuse conditions.',
          {'route':'/contact','label':'Contact about a correction or enquiry'}])
    page('/legal/privacy-policy','Privacy information','Website','How this static website handles visitor interactions.',
         ['This website has no account registration, submission form, analytics script, or advertising tracker in its source code.',
          'Search and page filters run in your browser. The theme preference is stored in your browser’s local storage.',
          'The hosting provider may process technical request information. Following an external link or an email link uses the selected service and its policies.',
          {'route':'/contact','label':'Contact the website owner'}])
    page('/legal/cookies','Cookies & local preferences','Website','Browser storage used by the website.',
         ['The website code does not set cookies. It uses a local-storage value named academic-theme to remember your light/dark preference.',
          'You can clear this preference through your browser’s site-data settings. Third-party websites opened through links may use their own cookies.'])

    # User-authored pages can add new content or deliberately override generated entries.
    mapped={p['route']:p for p in pages}
    for entry in custom:
        if entry['route'] in mapped: mapped[entry['route']].update(entry)
        else: pages.append(entry); mapped[entry['route']]=entry
    return pages


def make_redirects(old_routes, pages):
    active={p['route'] for p in pages}
    special={'/computational-scientist':'/roles/computational-researcher',
             '/designer-animator':'/about','/web-android-developer':'/about','/entrepreneur':'/about','/artist':'/about',
             '/education/04-phd':'/education/ph-d-2025','/education/02-mtech':'/education/m-tech-2020',
             '/education/01-btech':'/education/b-tech-2016'}
    redirects={}
    for route in old_routes:
        if route in active: continue
        parent='/'+route.strip('/').split('/')[0]
        target=special.get(route,parent if parent in active else '/about')
        redirects[route]=target if target in active else '/about'
    return redirects
