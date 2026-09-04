# Editing your complete website

## One record, multiple pages

Edit your professional information in `content/profile.json`. Rebuilding updates the homepage, About, section indexes, individual detail pages, research-topic links, categories, roles, and milestones from the same data. This avoids manually editing hundreds of HTML files.

| Profile key | Edit here for |
| --- | --- |
| `philosophy` | About and Research direction text |
| `experience` | Appointments, teaching roles, circular `logo` images, optional `logo_alt` and `logo_caption` |
| `education` | Degrees, institutions, years, division, and local `logo` asset path |
| `publications` | Journal articles, citations, publisher links, and local `cover` images |
| `memberships` | Professional organisation and membership type |
| `outreach` | Lectures, programmes, year, descriptions, and stable IDs |
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
  "cover": "assets/journals/my-journal-cover.jpg",
  "url": "https://doi.org/YOUR-VERIFIED-DOI"
}
```

Replace every sample value before publishing and add the cover image at the specified path. Use a stable `id`: it controls the URL `/publications/2027-my-new-paper/`. Do not add guessed DOI links. Existing IDs should remain unchanged when you correct a title or pagination. Each cover appears beside the About publication, on collection cards, and on the individual publication page. Existing covers are representative journal covers, not guaranteed article-issue covers; keep that distinction when changing them.

Project URLs use their project code. For awards, books, and conference entries, an optional stable `id` can also be supplied. Otherwise a URL is generated from the record. Keep the title/institution stable or set an `id` if you want to retain a link while changing those fields.

## Edit or add a Markdown blog

**Edit `content/blogs/*.md`, not generated HTML.** Each of the five blogs has its own Markdown file. Their existing public URLs are unchanged. The diagrams are editable SVGs in `assets/diagrams/`.

To add another article, copy an existing `.md` file and change its metadata and body. The opening metadata supports scalar text values, not general YAML. Quote titles and summaries with ordinary double quotes; escape any double quotes inside a value as `\"`.

```markdown
---
route: /blog/my-research-note
title: "My Indian bridge research note"
summary: "A short description of this article."
image: assets/diagrams/bridge-load-path.svg
image_alt: "Describe the figure meaningfully"
status: "Indian bridge practice · Design"
---

## Main discussion

Write your article here, with **important terms** and [source links](https://example.org).

![Describe the drawing](/assets/diagrams/bridge-load-path.svg "An explanatory caption.")

## Further reading

[Related publications](/publications/)
```

The `image` field supplies the listing-card figure; the Markdown image line supplies the figure inside the article. Add any replacement image to `assets` before rebuilding. Use source links for technical claims, identify applicable Indian standards, and distinguish educational diagrams from actual measurements or construction details. Current blog checks expect an illustrated article of at least 350 words with Indian/IRC context.

Supported Markdown: `##`–`######` headings, paragraphs, bold, italic, inline code, links, images with optional captions, flat bulleted/numbered lists, blockquotes, fenced code, and pipe tables. Raw HTML is escaped. Nested lists, footnotes, general YAML, and full CommonMark extensions are not supported. The title creates the only H1; begin body sections at `##`.

Build with `python tools/build.py`. Commit both the source and rebuilt `docs` when publishing from `main /docs`. GitHub Pages serves the generated HTML; you only author Markdown. Alternatively select GitHub Actions in Pages settings and run the included manual **Build and deploy GitHub Pages** workflow to build directly from the Markdown sources.

The Blogs index and search index update automatically during a build. Keep each `route` stable to retain existing links. Do not also add the same blog to `content/pages.json`.

## Other detailed pages

Use `content/pages.json` for optional sections or per-route overrides of generated pages. Non-blog bodies support paragraph strings and objects with `heading`, `list`, `image`/`alt`/`caption`, `facts`, `link`/`label`, `route`/`label`, or `code`.

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

The Join navigation link follows About and uses the same styling as Blogs and About on every active page. Edit `profile.json → join` to change the cards. The `subject` field becomes the email subject; the recipient is your primary email from `site.json`.

Do not advertise confirmed places, funding, deadlines, or supervision arrangements until you have verified them. The current text invites enquiries without promising a vacancy.

## Preserve old links

`content/reference-routes.json` retains the old scaffold's known URLs. `tools/cv_content.py` generates direct forwarding pages for those that do not belong to your active portfolio. No old reference entry is presented as your own article or achievement.

The exact active page and redirect lists are in `docs/route-manifest.json`. If you deliberately reuse an old route for your own content, add it to `content/pages.json`; it becomes an active page instead of a forwarding page.

The removed qualification's old address is a neutral redirect to Education. Keep it when uploading this package so it replaces the previously published page. The active profile contains only the Ph.D. and M.Tech. entries.

## Sketches and college logos

The four role cards use `assets/sketches/scientist.png`, `educator.png`, `computational-researcher.png`, and `bridge-engineer.png`. These original illustrations were made with built-in image generation; exact prompts are preserved in `content/illustration-prompts.json`. Replace an image at the same path to keep the card link unchanged. White-background graphite illustrations also work in dark mode through the shared stylesheet.

The education records point to `assets/logos/iit-roorkee.svg` and `assets/logos/nit-hamirpur.png`. These are official emblems, kept on white plates so their colours remain unchanged in both themes. Source and reuse information is in `assets/ASSET-SOURCES.md`.

Works uses `works-publications.png` and `works-projects.png`; Research in focus uses `focus-publication.png` and `focus-research.png`, all within `assets/sketches`. Their exact prompts are in `content/homepage-sketch-prompts.json`.

Experience and education emblems sit on circular white plates with their entire original image contained inside, rather than cropping the actual logo. Pusa uses an explicitly labelled DTTE governing-department emblem because a historical Pusa-specific logo was not verified. The historical GBPIT monogram has nonofficial Wikimedia provenance and a CC BY-SA credit in `assets/ASSET-SOURCES.md`. Replace either with an institution-verified asset if available; do not substitute a similarly named college's logo.

## Contact, affiliation, membership, and outreach

GitHub is retained only where relevant to Codes; it is removed from the Contact me footer, Contact page, and About contact block. Email remains the primary contact method. The optional LinkedIn field can be filled in later.

Keep the ministry parenthesis with the full CSIR–CRRI name in `site.json` and `profile.json`. Membership is under `memberships`. Outreach has three 2026 lectures and one undated laboratory demonstration, with no date inferred for that demonstration. Edit those records once to update About, `/outreach/`, and the individual outreach pages.

## Content notes requiring your review

- The Springer article **Accelerating metamaterial topology optimization using deep super-resolution networks** is listed as *Computational Mechanics* **78, 101–126 (2026)**, following the [publisher's citation](https://link.springer.com/article/10.1007/s00466-026-02749-y).
- The book/proceedings entry repeats “Anurag Gupta” in its author string. The original is retained as `authors_as_listed`, but the page does not display an uncertain author/editor role. Please confirm your exact chapter/contribution details before adding them.
- Three 2026 conference contributions remain marked “Abstract accepted” because that is their status in the uploaded CV. Update their status only when appropriate.
- Year-only records display only the year. No 1 January dates, funding amounts, project completion statuses, numerical outcomes, job vacancies, or software releases have been invented.
- Journal impact factors and quartile labels are omitted because the year and ranking source need separate confirmation.

## Rebuild, check, and package

```bash
python tools/build.py
python tools/check.py docs
python tools/check_content.py docs
python tools/check_markdown.py
python tools/package.py ../my-complete-website.zip
```

Choose a new ZIP filename if that output already exists. The packager preserves old ZIPs and includes all website source and generated output, excluding temporary `_site` builds and Python caches.

For a project repository rather than `iitrshubham.github.io`, set `base_path` in `content/site.json` to `/REPOSITORY_NAME`, then rebuild. For your current user website, keep it empty.
