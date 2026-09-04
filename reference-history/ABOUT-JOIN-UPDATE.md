# About and Join update

This update uses your latest Research, Codes, and Highlights dropdown files, checked against GitHub commit `da1795b9e5fc45b98fcb85a942d37c410a79bb55` on 4 September 2026. Your uploaded CV provides the professional information.

## Publish the update

1. Download and extract `shubham-about-join-update.zip`.
2. Open your existing `iitrshubham.github.io` repository using GitHub Desktop.
3. Copy the extracted files and folders **into the repository folder**. Merge folders and replace matching files. **Do not delete the existing repository or upload the ZIP itself.**
4. Commit and push to `main`.
5. In GitHub, select **Settings → Pages → Deploy from a branch → main → /docs → Save**.
6. Wait for the Pages deployment to complete. Then open:
   - `https://iitrshubham.github.io/about/`
   - `https://iitrshubham.github.io/join/`

The current GitHub upload removed the generated HTML pages and `tools/build.py`. This package includes them again, including `docs/index.html`, so Pages has a complete website to serve. Do not replace `docs` with an assets-only folder. The package does not include or change your existing GitHub workflows.

The navigation order is **Research → Codes → Highlights → Blogs → Join → About**, on every generated page. The Join button opens your own Join page, not Tushar Mandal's website.

## What has changed

- About follows the reference's two-column introduction, experience-card grid, stacked education cards, section separators, and light/dark theme.
- Your full professional record is organised into research interests, six appointments, three qualifications, five journal publications, five research projects, eight consultancy projects, ten awards/fellowships, one books/proceedings entry, and eighteen conference contributions.
- Consultancy projects and conference contributions are expandable to keep the page readable.
- Join has undergraduate, M.Tech., Ph.D., postdoctoral/academic, and industry enquiry cards. Each email button opens a message to your institutional email with the appropriate subject.
- Your name, initials, affiliation, location, GitHub link, email, and short biography replace the shared profile placeholders.
- The existing dropdown data and six thumbnail images are preserved.

## Edit your information

| File | Purpose |
| --- | --- |
| `content/site.json` | Name, initials, short biography, email, location, portrait path, and optional CV link |
| `content/profile.json` | Complete About record and Join page wording; edit the `join` object for enquiry cards |
| `assets/style.css` | Styling; the About/Join section is clearly labelled |
| `assets/navigation.json` | Research, Codes, and Highlights dropdowns |
| `tools/build.py` | Layout and shared navigation |
| `docs/` | Ready-to-publish website; regenerated from the files above |

After editing the source, rebuild and upload the new `docs` folder too:

```bash
python tools/build.py
python tools/check.py docs
```

Do not edit only the generated HTML if you plan to rebuild later: a rebuild will replace that generated HTML.

## Add your photograph and downloadable CV

No photograph was embedded in the uploaded CV, so the profile uses your initials. To add your photograph, save it as `assets/profile.jpg`, set `"portrait": "assets/profile.jpg"` in `content/site.json`, and rebuild.

The original uploaded CV is **not published** in this package. Pay-scale information is omitted from the page. If you want a downloadable CV, add a public-ready PDF as `assets/cv.pdf`, set `"cv": "assets/cv.pdf"`, and rebuild. A Download CV button will then appear on About.

## Content notes

- No funded vacancy, admission entitlement, deadline, or guaranteed supervision is claimed. Join is an enquiry page until you add confirmed opportunities.
- The three 2026 conference abstracts remain labelled **Abstract accepted — per CV**. No claim has been made that those talks were delivered.
- The books/proceedings entry in the CV repeats “Anurag Gupta” in its author list and does not specify your exact contribution type. The page displays its title, publisher, and year only; the original author string is retained in `authors_as_listed` for your review.
- Journal impact factors and Q1 labels are not shown because they are time-dependent; publication records follow the supplied CV rather than an independently verified bibliography.
- Other previously unfilled reference-route pages remain editable scaffolds. This update does not invent articles or replace them with someone else's work.
- Search-engine template mode remains enabled while those pages are unfinished. It does not make a deployed website private.

## Checks and limits

All 406 HTML files, all three dropdowns' configured targets and thumbnails, and 22,608 local links/assets passed validation. JavaScript and Python syntax checks passed. The domain-root and `/portfolio` base-path builds were checked. Browser interaction/visual testing was not performed.

The styling is an independent implementation informed by [Abhinav Gupta's About page](https://abhigupta.io/about) and the existing supplied menu screenshots. The Join structure is informed by [Tushar Mandal's Join Us section](https://tusharmandal.com/team/#join_us), with original wording appropriate to your CV. This is not either author's original source repository.

These files are ready to upload; this package has not been pushed to GitHub or deployed automatically.
