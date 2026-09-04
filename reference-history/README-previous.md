# Academic website for GitHub Pages

A static, editable academic portfolio inspired by the layout and navigation of [abhigupta.io](https://abhigupta.io/). Includes **405 page routes plus a custom 404 error page**, responsive navigation, light/dark themes, search, filtered collections, pagination, and article layouts.

**Latest update:** The About page is populated from Dr. Shubham Saurabh's CV, and a Join page is linked between Blogs and About. Start with [ABOUT-JOIN-UPDATE.md](ABOUT-JOIN-UPDATE.md) for upload and editing instructions.

## What this package is — and what is still needed

This is an **independently implemented design and route scaffold**, not the original website's source repository or an exact copy. The About page now uses your supplied professional information. The reference author's biography, photographs, original articles, papers, downloadable books, and applications have not been imported. The dropdowns retain the thumbnail crops from the screenshots you supplied, linked to their original sources. Other unfilled detail pages remain marked as awaiting your content.

The reference site's terms restrict republication. To reproduce its actual content, obtain appropriate permission and the original source/content export. Publicly linked external projects and books can have their own licenses; none have been imported into this package.

The inventory contains **401 internal routes** found in the inspected homepage, blog index, project index, terms page, and embedded navigation/search data. Three parent collection pages were added. This is not a verified exhaustive crawl: unlinked pages and separately hosted workshop/book applications may be missing.

See [ROUTE-INVENTORY.md](ROUTE-INVENTORY.md) for the exact inventory.

## Publish at username.github.io

1. Use your existing repository **iitrshubham/iitrshubham.github.io**.
2. Merge the extracted package contents into the repository root, preserving unrelated files. The `docs` folder must contain `index.html` and every generated subpage, not only assets.
3. Commit and push to `main` using GitHub Desktop or your existing Git workflow.
4. Select **Settings → Pages → Source: Deploy from a branch → main → /docs → Save**.
5. After deployment succeeds, open `https://iitrshubham.github.io/`.

No custom domain is configured, and no `CNAME` file is included.

### Rebuilding for branch deployment

For a user website (`YOUR_USERNAME.github.io`), the included `docs` folder is already built for the domain root. Upload it, then choose **Settings → Pages → Source: Deploy from a branch → main → /docs → Save**. In this mode, rebuild `docs` and commit it whenever you edit the source content. Do not rely on changes to JSON alone.

For a project website, set `base_path` in `content/site.json` to `/REPOSITORY_NAME`, rebuild, and upload the resulting `docs` folder. This update does not change existing repository workflows.

## Personalize the website

Edit `content/site.json`:

| Setting | What to enter |
| --- | --- |
| `name`, `initials` | Your name and initials |
| `title` | Your role and institution |
| `tagline` | A short description of your work |
| `about` | Your biography, as a list of paragraphs |
| `location`, `email` | Your contact details |
| `github`, `linkedin` | Complete profile URLs |
| `portrait` | For example, `assets/profile.jpg` after adding the image |
| `cv` | For example, `assets/cv.pdf` or a complete HTTPS URL |
| `research_statement` | A local asset path or complete HTTPS URL |
| `site_url` | Origin only, such as `https://YOUR_USERNAME.github.io` |
| `base_path` | Empty for user websites; `/REPOSITORY_NAME` for a manually built project website |
| `template_mode` | Keep `true` while preparing content; change to `false` when your portfolio is ready |

Empty social/contact fields are omitted. The portrait uses initials until you add your photo. Replace `assets/favicon.svg` with your own icon if desired. No third-party fonts, analytics, tracking scripts, or server APIs are required.

`template_mode` adds a visible template label and requests that search engines not index the template. **It does not make a published website private.** Empty detail pages retain `noindex` after template mode is disabled.

## Edit a page or add a subpage

Every route is a record in `content/pages.json`. Search for its `route`. Change its title, summary, and body. About and Join have dedicated layouts: edit their content in `content/profile.json`. The reference-route labels are starting points; replace them with the titles of your own work.

Example page record:

```json
{
  "route": "/projects/bridge-health-monitoring",
  "title": "Bridge health monitoring",
  "section": "Projects",
  "kind": "detail",
  "summary": "Add a short, accurate description of your project.",
  "body": [
    "Write an introductory paragraph here.",
    {"heading": "Objectives"},
    {"list": ["First objective", "Second objective"]},
    {"heading": "Methods and outcomes"},
    "Explain the work, findings, and your contribution.",
    {"image": "assets/project-photo.jpg", "alt": "Describe the photograph", "caption": "Photo caption"},
    {"link": "https://example.org/project", "label": "Project resource"},
    {"code": "print('A code example')"}
  ]
}
```

Add that record to the JSON array; don't replace the entire array. Put referenced local files in `assets`. Do not insert raw HTML: content is escaped by the generator. Images, code, lists, headings, and links use the structured blocks shown above.

- A page with `kind: "collection"` lists the subpages under its route.
- Routes should begin with `/` and have no trailing slash in JSON.
- A route `/projects/example` generates `docs/projects/example/index.html` and is served at `/projects/example/`.
- The home page shows news records only after their `body` is populated. Add an optional `date` field in `YYYY-MM-DD` format for ordering.
- To remove a reference-only page, remove its record. Keep the core pages linked from the shared navigation, or update the navigation in `tools/build.py` as well.
- To change colors and layout, edit `assets/style.css`.
- Shared navigation, footer, home layout, and article rendering are in `tools/build.py`.

## Build and validate locally

Requires Python 3.10 or newer. No Python packages or Node dependencies are needed to build.

```bash
python tools/build.py
python tools/check.py docs
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000` in your browser. Use a local HTTP server; opening a deeply nested HTML file directly with `file://` will not resolve domain-relative links correctly.

The checker verifies every generated HTML page, local navigation target, asset reference, page title, and primary heading. `node --check assets/app.js` can optionally check JavaScript syntax if Node is installed.

## File map

| Path | Purpose |
| --- | --- |
| `content/site.json` | Identity, biography, contact information, configuration |
| `content/profile.json` | Detailed CV records, About page text, and Join enquiry cards |
| `content/pages.json` | Editable page and subpage records |
| `content/reference-routes.json` | Discovered reference URL inventory |
| `assets/` | Original stylesheet, JavaScript, icon, and your future uploads |
| `tools/build.py` | Static website generator |
| `tools/check.py` | Link and asset validation |
| `docs/` | Prebuilt website for a domain-root deployment |

## Sources and verification limits

- Reference: [abhigupta.io](https://abhigupta.io/), inspected 4 September 2026.
- Content reuse notice: [reference site terms](https://abhigupta.io/legal/terms).
- Publishing: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart).
- Workflow setup: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Validation results are recorded in `VALIDATION.md`. A successful local check does not mean that a GitHub repository was created or that GitHub Pages has been deployed.
