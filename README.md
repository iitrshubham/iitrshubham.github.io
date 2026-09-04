# Academic website for GitHub Pages

A static, editable academic portfolio inspired by the layout and navigation of [abhigupta.io](https://abhigupta.io/). Includes **404 page routes plus a custom 404 error page**, responsive navigation, light/dark themes, search, filtered collections, pagination, article layouts, and a GitHub Pages deployment workflow.

## What this package is — and what is still needed

This is an **independently implemented design and route scaffold**, not the original website's source repository or an exact copy. The personal biography, photographs, illustrations, original articles, papers, downloadable books, videos, and interactive applications have **not** been copied. Detail pages are explicitly marked as awaiting your content. The typography, artwork, animation, and some interactions differ from the reference.

The reference site's terms restrict republication. To reproduce its actual content, obtain appropriate permission and the original source/content export. Publicly linked external projects and books can have their own licenses; none have been imported into this package.

The inventory contains **401 internal routes** found in the inspected homepage, blog index, project index, terms page, and embedded navigation/search data. Three parent collection pages were added. This is not a verified exhaustive crawl: unlinked pages and separately hosted workshop/book applications may be missing.

See [ROUTE-INVENTORY.md](ROUTE-INVENTORY.md) for the exact inventory.

## Publish at username.github.io

1. Create a GitHub repository named **YOUR_USERNAME.github.io**, replacing YOUR_USERNAME with your GitHub username. Use a public repository if you are using GitHub Free. Do not overwrite an existing website repository.
2. Upload **the contents of this repository folder**, including `content`, `assets`, `tools`, and `.github/workflows/deploy.yml`, to the `main` branch. Do not upload the ZIP itself. GitHub Desktop is convenient for preserving the hidden `.github` directory.
3. In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open **Actions → Build and deploy GitHub Pages → Run workflow**. After the build and deployment succeed, the deployment URL appears in the workflow summary and under Settings → Pages.
5. Your user website will be `https://YOUR_USERNAME.github.io/`.

The workflow automatically detects the repository base path, so a normal project repository also works at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

No custom domain is configured, and no `CNAME` file is included.

### Optional: publish the already-built files without Actions

For a user website (`YOUR_USERNAME.github.io`), the included `docs` folder is already built for the domain root. Upload it, then choose **Settings → Pages → Source: Deploy from a branch → main → /docs → Save**. In this mode, rebuild `docs` and commit it whenever you edit the source content. Do not rely on changes to JSON alone.

For a project website, set `base_path` in `content/site.json` to `/REPOSITORY_NAME`, rebuild, and upload the resulting `docs` folder. GitHub Actions handles this automatically in the recommended method.

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

Every page is a record in `content/pages.json`. Search for its `route`. Change its title, summary, and body. The reference-route labels are starting points; replace them with the titles of your own work.

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
| `content/pages.json` | Editable page and subpage records |
| `content/reference-routes.json` | Discovered reference URL inventory |
| `assets/` | Original stylesheet, JavaScript, icon, and your future uploads |
| `tools/build.py` | Static website generator |
| `tools/check.py` | Link and asset validation |
| `.github/workflows/deploy.yml` | Automatic build, validation, and GitHub Pages deployment |
| `docs/` | Prebuilt website for a domain-root deployment |

## Sources and verification limits

- Reference: [abhigupta.io](https://abhigupta.io/), inspected 4 September 2026.
- Content reuse notice: [reference site terms](https://abhigupta.io/legal/terms).
- Publishing: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart).
- Workflow setup: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Validation results are recorded in `VALIDATION.md`. A successful local check does not mean that a GitHub repository was created or that GitHub Pages has been deployed.
