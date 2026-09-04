# Validation

Checked on 4 September 2026.

| Check | Result |
| --- | --- |
| Discovered reference routes represented in page data | 401 of 401 |
| Generated website routes | 405, including Join and three added parent collections |
| HTML files including the custom error page | 406 |
| Local links and asset references checked in domain-root build | 22,608; all resolved |
| Local links and asset references checked in `/portfolio` project build | 22,608; all resolved |
| JavaScript syntax | Passed `node --check assets/app.js` |
| Python syntax | Passed for generator and link checker |
| External services required for website rendering | None |
| External reference links or downloadable books recursively mirrored | No |
| Browser interaction or visual comparison tested | No |
| About content | Six-page user-supplied CV, extracted and visually checked |
| Profile photograph | Not supplied; initials used |
| Original uploaded CV published | No; pay-scale information omitted |
| Shared navigation order | Research, Codes, Highlights, Blogs, Join, About |
| Reference dropdowns | Latest shared data and six thumbnails preserved |
| Exact visual/content replica of abhigupta.io | No; editable recreation and route scaffold |
| GitHub repository created or Pages deployment completed | No |

The prebuilt `docs/` output targets the domain root. The temporary project-path output used in validation is not included in the ZIP. Existing GitHub workflows are not included or modified by this update.

The connected GitHub plugin was used to verify the latest repository source. The source hashes matched the local updated dropdown files. The latest upload removed the generated HTML and builder, so the package includes these again. Direct write access had previously been denied by the integration; no push or deployment is claimed. See ABOUT-JOIN-UPDATE.md for publication steps.
