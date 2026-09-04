# Complete repository validation

Checked on 4 September 2026 against the latest available GitHub source at commit `a7568010a0a3e1ca0906c8ca340e7bf544a548c0`, the established professional records, and the eleven requested updates. Latest remote non-output source was reconciled before editing; unrelated workflow content was preserved.

| Check | Result |
| --- | --- |
| Active content pages | 146 |
| Individual professional records | 59, including 4 outreach activities |
| Compatibility forwarding pages | 374; all lead directly to active pages |
| Original reference addresses retained | 401 of 401 |
| Total HTML files, including custom 404 | 521 |
| Local links/assets checked in domain-root build | 9,654; all resolved |
| Local links/assets checked in `/portfolio` build | 9,654; all resolved |
| About page coverage | All retained interests and professional entries checked |
| Publication links | HTTPS publisher links located for all 5 papers |
| Accepted abstract labels | 3, matching the CV |
| Navigation order | Blogs → About → Join on every active page; no special Join class |
| Undergraduate qualification | Removed from active data, biography, education, journey, milestones and search; old URL redirects |
| Source-narration wording | No “listed/recorded in my CV” or similar wording in generated pages or menu descriptions |
| Blog articles | 5 separate Markdown sources, rewritten for Indian practice, with IRC/BIS references, diagrams, tables, and scope limitations |
| Markdown checks | Headings, lists, emphasis, code, tables, images/captions, escaping, safe URLs, and project-subpath assets |
| Homepage illustrations | 8 generated sketches: all 4 role cards plus all 4 Works/Research in focus cards |
| Publication covers | All 5 About entries have left-hand covers; all 5 publication cards and individual records have covers |
| Cover accuracy | Genuine representative journal covers; exact article issue is not claimed |
| Circular emblems | All 6 experience cards and both education cards; Pusa uses a clearly labelled DTTE emblem |
| Historical logo provenance | GBPIT monogram: Wikimedia, Monurawal17, CC BY-SA 4.0; no official historical source verified |
| Membership | Indian Roads Congress (IRC), Life member |
| Outreach | 3 supplied 2026 lectures, including one online lecture, and 1 undated facilities demonstration |
| Ministry affiliation | Exact requested parenthesis wherever the full CSIR–CRRI name is rendered |
| Contact GitHub removal | All active page contact footers, About contact, and Contact page; Codes link retained |
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
python tools/check_markdown.py
node --check assets/app.js
```

The optional Node syntax check is not needed to build. The site generator and content checks use Python's standard library only.

`content/profile.json` remains the source for personal information. One Springer volume/page field was verified against the publisher. The five new blogs are educational articles written for this website, with original conceptual diagrams and external engineering references. They do not claim real measurements, project-specific designs, or new research results. No full papers, unsupported accomplishments, funding amounts, personal portrait, or vacancies were invented.

The existing publication-discovery workflow is preserved, including its pre-existing dependency on a missing script. It is independent of website building and deployment; see README.md.
