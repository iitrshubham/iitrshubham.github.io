# Personalised dropdown navigation

Navigation order: **Research → Codes → Highlights → Blogs → About → Join**. Join is an ordinary text link with the same treatment as Blogs and About, including on mobile.

The previous wide-panel design is retained: each dropdown has two columns of four links, a two-card feature panel, and two bottom actions. Its light/dark themes, mobile stacking, search, and keyboard controls are preserved.

All active entries refer to Dr. Shubham Saurabh's work and writing. Borrowed tutorial titles, external code repositories, startup claims, and unrelated achievements have been replaced. The earlier screenshot-thumbnail crops remain in `reference-assets/menu` for recovery but are not published in `docs`.

Edit `assets/navigation.json`:

| Field | Meaning |
| --- | --- |
| `title`, `description` | Visible label and explanation |
| `href` | Local route such as `/publications/`, or an HTTPS link |
| `icon` | An existing icon name from `assets/app.js` |
| `cover_label`, `cover_type` | Text shown on the feature card's typographic cover |
| `image` | Optional path relative to `assets` if you later add a real thumbnail |
| `image_alt` | Description of an optional image |
| `action` | Visible action, such as `Read publication`; only `Watch video` adds a play overlay |

The Codes panel points to research-method pages and the user's GitHub profile. It does not assert that a particular repository or code release exists when the CV does not identify one.

After editing, run `python tools/build.py` and commit the rebuilt `docs` folder. Changing only the source JSON will not change a site served from `main /docs`.

Each menu opens by click or Enter/Space. Arrow Down opens the panel and moves focus to its first link. Escape closes the menu and returns focus; only one menu remains open. The primary menu collapses on narrow screens, while feature panels stack. Ordinary HTML fallback links remain if shared menu data cannot load.

Layout and behaviour have been retained in source, and links/syntax checked. Browser interaction testing was not performed for this package.
