# Dr. Shubham Saurabh — complete website repository

Complete editable source and ready-to-publish files for **https://iitrshubham.github.io/**. This is the full repository package, not a partial update. No previous ZIP is required to build or publish the website.

The website is populated from the six-page CV supplied by Dr. Shubham Saurabh. The previously updated About page, Join page, and wide Research/Codes/Highlights dropdown design are included. The menu entries now refer to Shubham's research and professional record.

## Publish the complete website

1. Extract `shubham-complete-repository.zip`.
2. Open your existing **iitrshubham/iitrshubham.github.io** repository in GitHub Desktop.
3. Copy **all extracted contents** into that repository folder. Merge folders and replace matching files. Preserve unrelated work and the existing Git history; do not delete the repository or upload the ZIP itself.
4. Commit and push to `main`.
5. On GitHub, select **Settings → Pages → Deploy from a branch → main → /docs → Save**.
6. After the Pages deployment succeeds, open **https://iitrshubham.github.io/**. Check `/about/`, `/join/`, `/publications/`, and `/projects/`.

The `docs` directory must include `index.html`, its assets, and all subdirectories. Do not upload an assets-only `docs` directory. These prebuilt files need no Python installation on your computer for the initial upload. The website is public once deployed.

GitHub's [publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) explains the branch and `/docs` settings.

## What is populated

| Section | CV-based content |
| --- | --- |
| Home, About, Contact | Name, roles, affiliations, biography, research focus, address, email, and GitHub |
| Publications | 5 journal articles, individual record pages, citations, and publisher links |
| Projects | 5 research projects and 8 consultancy assignments, with individual pages and recorded roles |
| Experience and Education | 6 appointments and 3 qualifications |
| Awards and research support | 10 awards, fellowships, and support records; research programme references |
| Talks and conferences | 18 contributions; 3 remain labelled as accepted abstracts |
| Books and proceedings | 1 contribution listed in the CV |
| Research areas and methods | 12 interest areas and 8 method pages linking to relevant CV records |
| Categories, roles, themes, applications, and milestones | Automatically assembled from the same professional records |
| Join | Student, researcher, and industry enquiry options; no unconfirmed funded vacancy claims |

There are **138 active pages**, **373 legacy forwarding pages**, and a custom error page: **512 HTML files** in total. Forwarding pages are compatibility links, not 373 invented articles. All 401 originally discovered reference addresses still resolve.

Blogs, videos, workshops, press, reviewing/panel service, and outreach remain clearly labelled as not yet published because the supplied CV does not provide content for them. They do not display the reference author's articles or achievements.

## Edit and rebuild

The site uses Python's standard library. No npm installation, paid theme, server, or database is required.

```bash
python tools/build.py
python tools/check.py docs
python tools/check_content.py docs
```

Then commit the changed source files **and the rebuilt `docs` folder**. Editing JSON alone will not update a site published directly from `main /docs`.

To preview locally:

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000/`. Do not open nested HTML files directly with `file://`.

See **CONTENT-GUIDE.md** for examples of editing records, adding blog posts, adding a portrait, and adding a downloadable public-ready CV.

## Repository contents

| Path | Purpose |
| --- | --- |
| `content/site.json` | Shared identity and site configuration |
| `content/profile.json` | Master professional record and Join wording |
| `content/research.json` | Topic/method descriptions and related-record matching |
| `content/pages.json` | Custom pages, optional sections, and per-route overrides |
| `assets/` | Active stylesheet, script, menu configuration, and favicon |
| `tools/build.py` | HTML generator and layouts |
| `tools/cv_content.py` | Generates the CV-based page graph |
| `tools/check.py` | Local-link, heading, and asset validation |
| `tools/check_content.py` | CV coverage, personal identity, navigation, and redirect checks |
| `tools/package.py` | Produces a complete repository ZIP |
| `docs/` | Complete prebuilt GitHub Pages website |
| `reference-assets/`, `reference-history/` | Earlier reference assets and instructions, retained for recovery; not part of `docs` |
| `content/reference-pages.json`, `content/reference-routes.json` | Archived reference scaffold and compatibility address inventory |

## Workflows

The recommended publishing method is still **main /docs**.

An optional **Build and deploy GitHub Pages** workflow is included for users who choose **Settings → Pages → GitHub Actions**. It is manual-only: run it from Actions after selecting that publishing method. It does not automatically deploy on every push.

Your existing **Find New Publications** workflow is retained unchanged. It calls `scripts/find_publications.py`, which is absent from the latest GitHub repository checked for this update. That unrelated automation may fail until its original script is restored; the website does not depend on it. This package does not create a new publication-monitoring service.

## Accuracy, privacy, and design

- Professional content follows the uploaded CV, not unrelated inferred personal history.
- The original CV PDF, salary information, and any private credentials are not included.
- No portrait was supplied in the CV; initials are used. A photo can be added later.
- Publication abstracts, article PDFs, research results, code releases, funding amounts, and exact dates not given in the CV have not been invented.
- Publisher links were located for the five listed papers. One Springer record's volume/pages were updated to **78, 101–126**, with the original CV value retained in the data and documented in CONTENT-GUIDE.md.
- The book/proceedings entry has an ambiguous repeated author in the CV. Only its title, publisher, and year are displayed.
- The interface is an independent implementation inspired by [abhigupta.io](https://abhigupta.io/about); it is not that author's original repository. Join's card structure was informed by [Tushar Mandal's Join Us section](https://tusharmandal.com/team/#join_us).

The package has been built and checked locally, but has **not** been pushed to GitHub or deployed automatically. Browser interaction/visual testing was not performed. See VALIDATION.md.
