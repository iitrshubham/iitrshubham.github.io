# Validation

Checked on 4 September 2026.

| Check | Result |
| --- | --- |
| Discovered reference routes represented in page data | 401 of 401 |
| Generated website routes | 404, including three added parent collections |
| HTML files including the custom error page | 405 |
| Local links and asset references checked in domain-root build | 22,115; all resolved |
| Local links and asset references checked in `/portfolio` project build | 22,115; all resolved |
| JavaScript syntax | Passed `node --check assets/app.js` |
| Python syntax | Passed for generator and link checker |
| External services required for website rendering | None |
| External reference links or downloadable books recursively mirrored | No |
| Browser interaction or visual comparison tested | No |
| Original articles, profile photos, and illustrations included | No |
| Exact visual/content replica of abhigupta.io | No; editable recreation and route scaffold |
| GitHub repository created or Pages deployment completed | No |

The prebuilt `docs/` output targets the domain root. The GitHub Actions workflow builds the appropriate base path at deployment time. The temporary project-path output used in validation is not included in the ZIP.

The connected GitHub plugin did not expose repository actions to this running session. No repository was created or changed. The package is ready for upload using the instructions in README.md.
