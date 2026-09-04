# Editing the Research, Codes, and Highlights dropdowns

## Apply the update ZIP

1. Extract `dropdown-menu-update.zip` on your computer.
2. Open `iitrshubham/iitrshubham.github.io` on GitHub and select **Add file → Upload files**.
3. Upload the extracted `assets`, `docs`, and `tools` folders plus `NAVIGATION.md` into the repository root. These are only the changed files: replace files with matching paths and keep the other website files.
4. Commit to `main`. Leave **Settings → Pages → main → /docs** selected.
5. Wait for the Pages deployment to finish, then refresh the website. If the old dropdowns are cached, use Ctrl+Shift+R on Windows or Command+Shift+R on macOS.

The update includes the light and dark panel layouts, three groups of eight links, six thumbnail cards, accessible click/keyboard controls, and narrow-screen stacking. Local validation passed for 405 HTML files, 22,151 navigation/asset references, all six PNG thumbnails, and JavaScript syntax. Browser interaction testing was not performed before this ZIP was prepared.

The full-width menus are configured in **`assets/navigation.json`**. They enhance the existing HTML navigation on every page; ordinary dropdown links remain available if JavaScript or the data request is unavailable.

Each menu has two `columns`, two featured cards under `features`, and bottom `actions`.

| Field | What to change |
| --- | --- |
| `title` | Link, card, or column title |
| `description` | Short text below the title |
| `href` | A local route such as `/publications/`, or a complete HTTPS URL |
| `image` | Thumbnail path relative to `assets`, such as `menu/my-video.png` |
| `action` | Card action, for example `Watch video` or `Read tutorial` |
| `badge` | Optional short status beside a link; remove the field to hide it |
| `icon` | One of the icon names already used in the file |

The menu content follows the screenshots supplied for this update. Featured tutorial images reproduce the thumbnails shown there. External tutorial and code links point to their original sources; they do not claim that those projects belong to you. Replace these entries with your own when ready. The Codes footer links to your GitHub profile.

Three practical link adjustments avoid unusable original actions: Research Vision opens your research-areas page until you have a statement to link; the plotting/Linux/Docker cards use `Read tutorial` because they open articles; Scientific Machine Learning links to an available PINN example repository. The workshop badge has no borrowed date.

If you publish from **main /docs**, edit the source configuration and run:

```bash
python tools/build.py
python tools/check.py docs
```

Commit both the source changes and rebuilt `docs` files. If you want to edit only the deployed menu directly in GitHub, change `docs/assets/navigation.json` and also make the same change in `assets/navigation.json` so a later build preserves it.

All menu styles are at the end of `assets/style.css`; behavior is in `assets/app.js`. The build copies these files and the thumbnail images into `docs/assets`.

Menus open by clicking or pressing Enter/Space on their heading. Arrow Down opens the menu and focuses its first link. Escape closes it and restores focus. Only one desktop menu stays open at a time. On narrow screens, expand the main navigation first; menu sections stack vertically.
