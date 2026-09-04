# Complete repository validation

Checked on 4 September 2026 against the supplied CV and the latest available GitHub source at commit `da1795b9e5fc45b98fcb85a942d37c410a79bb55`.

| Check | Result |
| --- | --- |
| Active content pages | 138 |
| Individual CV records | 56 |
| Legacy forwarding pages | 373; all lead directly to active pages |
| Original reference addresses retained | 401 of 401 |
| Total HTML files, including custom 404 | 512 |
| Local links/assets checked in domain-root build | 8,886; all resolved |
| Local links/assets checked in `/portfolio` build | 8,886; all resolved |
| About page CV coverage | All interests and professional record entries checked |
| Publication links | HTTPS publisher links located for all 5 papers |
| Accepted abstract labels | 3, matching the CV |
| Navigation order | Blogs → Join → About on every active page |
| Shared dropdowns | 3 menus, each with 2 columns of 4 links |
| Foreign identity/template checks | Passed for every active page |
| JavaScript syntax | Passed |
| Python syntax | Passed |
| Original CV and pay-scale data published | No |
| External services needed to render pages | None; publisher/GitHub/email links are optional outbound actions |
| Browser interaction/visual testing | Not performed |
| GitHub push or live deployment | Not performed |

Run the checks again after edits:

```bash
python tools/build.py
python tools/check.py docs
python tools/check_content.py docs
node --check assets/app.js
```

The optional Node syntax check is not needed to build. The site generator and content checks use Python's standard library only.

`content/profile.json` remains the source for personal information. One Springer volume/page field was corrected from the publisher, with the CV value retained. No full papers, original articles, unsupported accomplishments, funding amounts, personal portrait, or vacancies were invented.

The existing publication-discovery workflow is preserved, including its pre-existing dependency on a missing script. It is independent of website building and deployment; see README.md.
