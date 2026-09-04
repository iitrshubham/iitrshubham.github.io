# Editing your complete website

## One record, multiple pages

Edit your professional information in `content/profile.json`. Rebuilding updates the homepage, About, section indexes, individual detail pages, research-topic links, categories, roles, and milestones from the same data. This avoids manually editing hundreds of HTML files.

| Profile key | Edit here for |
| --- | --- |
| `philosophy` | About and Research direction text |
| `experience` | Appointments and teaching roles |
| `education` | Degrees, institutions, years, and division |
| `publications` | Journal articles, citations, publisher links |
| `research_projects` | Research project title, programme, code, role |
| `consultancy` | Consultancy title, context, code, role |
| `awards` | Awards, fellowships, and travel/conference support |
| `books` | Books/proceedings contribution |
| `conferences` | Titles, author lists, event, location, date, and status |
| `interests` | Research interests displayed on About |
| `join` | Enquiry types, descriptions, and contact instructions |

Your shared name, role, email, location, biography, portrait path, and optional CV link are in `content/site.json`. To add a new topic to the topic navigation, also add its description and matching terms in `content/research.json`.

## Add a journal publication

Append an object to `publications` in `content/profile.json`:

```json
{
  "id": "2027-my-new-paper",
  "title": "Exact paper title",
  "authors": "Author One, Shubham Saurabh, Author Three",
  "journal": "Exact journal name",
  "volume": "Volume, article number or pages",
  "year": "2027",
  "url": "https://doi.org/YOUR-VERIFIED-DOI"
}
```

Replace every sample value before publishing. Use a stable `id`: it controls the URL `/publications/2027-my-new-paper/`. Do not add guessed DOI links. Existing IDs should remain unchanged when you correct a title or pagination.

Project URLs use their project code. For awards, books, and conference entries, an optional stable `id` can also be supplied. Otherwise a URL is generated from the record. Keep the title/institution stable or set an `id` if you want to retain a link while changing those fields.

## Add a blog or detailed page

Append a record to `content/pages.json`. This file can add new routes or override a generated route. For example:

```json
{
  "route": "/blog/my-research-note",
  "title": "My research note",
  "section": "Blog",
  "kind": "detail",
  "date": "2026-09-04",
  "summary": "A short description of the article.",
  "body": [
    "Your introduction.",
    {"heading": "Main discussion"},
    {"list": ["First point", "Second point"]},
    {"image": "assets/my-figure.png", "alt": "Describe the figure", "caption": "Your caption"},
    {"link": "https://example.org", "label": "External source"},
    {"route": "/publications", "label": "Related publications"},
    {"code": "print('Your code example')"}
  ]
}
```

Add the figure file to `assets` before rebuilding, or omit the image block. Raw HTML is escaped. Supported blocks are paragraphs, headings, lists, code, images, facts, external links, and internal route links.

The Blogs index will automatically list direct child routes. When the first real post exists, its not-yet-published state is replaced by the list of posts. The same pattern works for Videos, Workshops, Outreach, Press, and Academic service.

To add extra detail to an existing generated project, add a page object with that project's exact `route` and a replacement `body`. Its title, summary, section, and other generated fields are preserved unless explicitly overridden. Include any factual fields you still want in the replacement body, using a `facts` block:

```json
{"facts": [["Role", "Project Leader"], ["Project reference", "RDS-000015"]]}
```

## Research-topic matching

Each entry in `content/research.json` has an `id`, `title`, `summary`, and a `match` list. Matching terms are checked against titles and summaries of publications, projects, consultancy, and conferences. These are related-record links, not claims of new results or code releases.

To choose a precise list on any collection page, override its `items` in `content/pages.json` with an array of exact routes.

## Photograph and downloadable CV

1. Put your photo in `assets/profile.jpg`.
2. Set `"portrait": "assets/profile.jpg"` in `content/site.json`.
3. Rebuild. The photo replaces the initials on Home and About.

To add a downloadable CV, put a **public-ready** PDF in `assets/cv.pdf`, set `"cv": "assets/cv.pdf"`, and rebuild. Check it for salary, personal contact details, and any information you do not want public before adding it. The uploaded source CV has deliberately not been included in this repository.

## Join page

The Join navigation button is already between Blogs and About on every active page. Edit `profile.json → join` to change the cards. The `subject` field becomes the email subject; the recipient is your primary email from `site.json`.

Do not advertise confirmed places, funding, deadlines, or supervision arrangements until you have verified them. The current text invites enquiries without promising a vacancy.

## Preserve old links

`content/reference-routes.json` retains the old scaffold's known URLs. `tools/cv_content.py` generates direct forwarding pages for those that do not belong to your active portfolio. No old reference entry is presented as your own article or achievement.

The exact active page and redirect lists are in `docs/route-manifest.json`. If you deliberately reuse an old route for your own content, add it to `content/pages.json`; it becomes an active page instead of a forwarding page.

## Source notes requiring your review

- The Springer article **Accelerating metamaterial topology optimization using deep super-resolution networks** is now listed as *Computational Mechanics* **78, 101–126 (2026)**, following the [publisher's citation](https://link.springer.com/article/10.1007/s00466-026-02749-y). The CV's original `1–26` value is retained in `cv_volume`.
- The book/proceedings entry repeats “Anurag Gupta” in its author string. The original is retained as `authors_as_listed`, but the page does not display an uncertain author/editor role. Please confirm your exact chapter/contribution details before adding them.
- Three 2026 conference contributions remain marked “Abstract accepted” because that is their status in the uploaded CV. Update their status only when appropriate.
- Year-only records display only the year. No 1 January dates, funding amounts, project completion statuses, numerical outcomes, job vacancies, or software releases have been invented.
- Journal impact factors and quartile labels are omitted because the year and ranking source need separate confirmation.

## Rebuild, check, and package

```bash
python tools/build.py
python tools/check.py docs
python tools/check_content.py docs
python tools/package.py ../my-complete-website.zip
```

Choose a new ZIP filename if that output already exists. The packager preserves old ZIPs and includes all website source and generated output, excluding temporary `_site` builds and Python caches.

For a project repository rather than `iitrshubham.github.io`, set `base_path` in `content/site.json` to `/REPOSITORY_NAME`, then rebuild. For your current user website, keep it empty.
