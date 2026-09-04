# Complete repository validation

Checked on 4 September 2026 against the latest available GitHub source at commit `efd03e5c06e7333ccde7d2aa4e282a150c1d6d24`, the established professional records, and the six requested changes.

| Check | Result |
| --- | --- |
| Active content pages | 142 |
| Individual professional records | 55 |
| Compatibility forwarding pages | 374; all lead directly to active pages |
| Original reference addresses retained | 401 of 401 |
| Total HTML files, including custom 404 | 517 |
| Local links/assets checked in domain-root build | 9,141; all resolved |
| Local links/assets checked in `/portfolio` build | 9,141; all resolved |
| About page coverage | All retained interests and professional entries checked |
| Publication links | HTTPS publisher links located for all 5 papers |
| Accepted abstract labels | 3, matching the CV |
| Navigation order | Blogs → About → Join on every active page; no special Join class |
| Undergraduate qualification | Removed from active data, biography, education, journey, milestones and search; old URL redirects |
| Source-narration wording | No “listed/recorded in my CV” or similar wording in generated pages or menu descriptions |
| Blog articles | 5 original educational posts; each has a figure, alt text, caption, and source links |
| Role illustrations | 4 generated sketches, bundled locally |
| College logos | Official IITR and NITH emblems, bundled locally |
| SVG syntax | 5 diagrams and IITR logo parsed successfully |
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

`content/profile.json` remains the source for personal information. One Springer volume/page field was verified against the publisher. The five new blogs are educational articles written for this website, with original conceptual diagrams and external engineering references. They do not claim real measurements, project-specific designs, or new research results. No full papers, unsupported accomplishments, funding amounts, personal portrait, or vacancies were invented.

The existing publication-discovery workflow is preserved, including its pre-existing dependency on a missing script. It is independent of website building and deployment; see README.md.
