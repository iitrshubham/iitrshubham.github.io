(() => {
  'use strict';
  const root = document.documentElement;
  // Resolve shared assets from the script URL, including project-site subpaths.
  const assetBase = new URL('.', document.currentScript.src);
  const siteBase = new URL('../', assetBase);
  const theme = document.querySelector('[data-theme-toggle]');
  function syncThemeSwitch() {
    const dark = root.dataset.theme === 'dark';
    theme?.setAttribute('aria-checked', String(dark));
    theme?.setAttribute('aria-label', 'Dark mode');
  }
  if (theme) {
    theme.classList.add('theme-switch');
    theme.setAttribute('role', 'switch');
    theme.replaceChildren(Object.assign(document.createElement('span'), { className: 'theme-switch-thumb' }));
    syncThemeSwitch();
  }
  theme?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    syncThemeSwitch();
    try { localStorage.setItem('academic-theme', next); } catch (_) { /* Storage is optional. */ }
  });
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  nav?.querySelectorAll(':scope > a').forEach(link => {
    if (new URL(link.href).pathname.replace(/\/$/, '') === location.pathname.replace(/\/$/, '')) {
      link.setAttribute('aria-current', 'page');
    }
  });
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  const details = [...document.querySelectorAll('nav details')];
  const header = document.querySelector('.site-header');
  function closeMenus(restoreFocus = false) {
    const opened = details.find(detail => detail.open);
    details.forEach(detail => { detail.open = false; });
    if (restoreFocus) opened?.querySelector('summary')?.focus();
  }
  function fitMenus() {
    const bottom = document.querySelector('.nav-shell')?.getBoundingClientRect().bottom || 80;
    header?.style.setProperty('--mega-available-height', `${Math.max(180, window.innerHeight - bottom - 20)}px`);
  }
  details.forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) {
      details.filter(other => other !== detail).forEach(other => { other.open = false; });
      fitMenus();
    }
    detail.querySelector('summary')?.setAttribute('aria-expanded', String(detail.open));
  }));
  document.addEventListener('click', e => { if (!e.target.closest('nav details')) details.forEach(d => { d.open = false; }); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const mobileOpen = nav?.classList.contains('is-open') && menu?.offsetParent !== null;
      closeMenus(!mobileOpen); nav?.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false');
      if (mobileOpen) menu.focus();
    }
  });
  header?.addEventListener('focusout', e => { if (e.relatedTarget && !header.contains(e.relatedTarget)) closeMenus(); });
  menu?.addEventListener('click', () => { if (menu.getAttribute('aria-expanded') === 'false') closeMenus(); });
  window.addEventListener('resize', fitMenus, { passive: true });
  window.addEventListener('scroll', fitMenus, { passive: true });
  const iconPaths = {
    book: '<rect x="4" y="3" width="16" height="19" rx="2"/><path d="M4 17h16"/>',
    'open-book': '<path d="M12 5v16M12 5C9 2 4 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-2-1-7-2-10 1Z"/>',
    'code-window': '<rect x="2" y="3" width="20" height="18" rx="3"/><path d="M2 9h20m-13 4-3 3 3 3m6-6 3 3-3 3"/>',
    graduation: '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v6l6 3 6-3v-6m4-3v8M12 9l6 3"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 12h18M12 3v18"/>',
    users: '<circle cx="9" cy="7" r="4"/><path d="M2 21v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v3m0-18a4 4 0 0 1 0 8m3 3a4 4 0 0 1 3 4v3"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-3 6-5 2 2-5 6-3Z"/>',
    history: '<path d="M21 12a9 9 0 1 0-3 7M12 6v6l4 2m2 5v-5h5"/>',
    cube: '<path d="m12 2 10 6v8l-10 6L2 16V8l10-6Zm0 0v20M2 8l20 8M2 16 22 8"/>',
    layers: '<path d="M2 6h20M2 12h20M2 18h20" stroke-dasharray="1 4"/><path d="M3 9h18M3 15h18"/>',
    spline: '<path d="M3 18C5 4 19 4 21 18M3 5h18"/><rect x="1" y="16" width="4" height="4" rx="1"/><rect x="19" y="16" width="4" height="4" rx="1"/><circle cx="7" cy="5" r="2"/><circle cx="17" cy="5" r="2"/>',
    material: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 7v.1M15 8v.1M10 12v.1M16 15v.1M7 17v.1" stroke-width="3"/>',
    temperature: '<path d="M17 4a2 2 0 0 1 4 0v11a4 4 0 1 1-4 0V4ZM7 3v18M2 6l10 12M12 6 2 18M2 12h10"/>',
    cloud: '<path d="M6 20h12a5 5 0 0 0 1-10 7 7 0 0 0-13-1 5.5 5.5 0 0 0 0 11Z"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01" stroke-width="3"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 0v6h6M8 13h8M8 17h6M8 8h1"/>',
    bulb: '<path d="M9 18h6m-6 3h6M8 15a6 6 0 1 1 8 0l-1 3H9l-1-3Zm4-5v8M2 9H1m22 0h-1M4 3l1 1m14-1-1 1M12 1v1"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 17v4M8 21h8"/>',
    tools: '<path d="m14 5 5 5M3 21l7-7M4 3l4 1 1 3 12 12-2 2L7 9 4 8 3 4m12-1a6 6 0 0 0-7 8m5 5a6 6 0 0 0 8-7l-4 4-4-4 4-4"/>',
    presentation: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 17v5m-5 0 5-5 5 5"/>',
    sliders: '<rect x="2" y="4" width="8" height="6" rx="3"/><rect x="14" y="4" width="8" height="6" rx="3"/><rect x="2" y="15" width="8" height="6" rx="3"/><path d="M14 18h8M2 7h.1M22 7h.1"/>',
    pen: '<path d="m16 3 5 5L8 21l-6 1 1-6L16 3Zm-13 13 5 5M13 22h9"/>',
    megaphone: '<path d="m3 9 17-6v18L3 15V9Zm4 7 1 6h4l-2-5M3 9H1v6h2M20 8a4 4 0 0 1 0 8"/>',
    branch: '<circle cx="6" cy="4" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 7v15M6 10c0 5 4 8 9 8"/>',
    play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8Z"/>'
  };
  function navIcon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('aria-hidden', 'true'); svg.classList.add('mega-icon');
    svg.innerHTML = iconPaths[name] || iconPaths.book;
    return svg;
  }
  function el(tag, className, text) {
    const node = document.createElement(tag); node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function navLink(item, className) {
    const link = el('a', className);
    const url = new URL(item.href.replace(/^\/(?!\/)/, ''), siteBase);
    if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Unsupported navigation URL');
    link.href = url.href;
    if (url.origin !== location.origin) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    return link;
  }
  function buildMegaMenus(config) {
    for (const group of config.menus) {
      const detail = details.find(d => d.querySelector('summary')?.textContent.trim() === group.label);
      if (!detail) continue;
      const panel = el('div', 'mega-panel');
      panel.id = `mega-${group.label.toLowerCase()}`;
      panel.setAttribute('role', 'group'); panel.setAttribute('aria-label', `${group.label} links`);
      const columns = el('div', 'mega-columns');
      for (const column of group.columns) {
        const section = el('section', 'mega-column');
        section.append(el('h2', 'mega-heading', column.title));
        const list = el('ul', 'mega-list');
        for (const item of column.items) {
          const li = el('li', 'mega-list-item'); const link = navLink(item, 'mega-link');
          const copy = el('div', 'mega-link-copy'); const title = el('div', 'mega-link-title');
          title.append(el('span', '', item.title));
          if (item.badge) title.append(el('span', 'mega-badge', item.badge));
          copy.append(title, el('p', 'mega-description', item.description));
          link.append(navIcon(item.icon), copy); li.append(link); list.append(li);
        }
        section.append(list); columns.append(section);
      }
      const sidebar = el('section', 'mega-featured'); sidebar.append(el('h2', 'mega-heading', group.featured_title));
      const cards = el('div', 'mega-feature-list');
      for (const item of group.features) {
        const card = navLink(item, 'mega-feature'); const thumbnail = el('div', 'mega-thumbnail');
        if (item.image) {
          const img = el('img', ''); img.src = new URL(item.image, assetBase).href; img.alt = item.image_alt || ''; img.width = 288; img.height = 162; img.loading = 'lazy';
          thumbnail.append(img);
          if (item.action === 'Watch video') { const play = el('span', 'mega-play'); play.setAttribute('aria-hidden', 'true'); thumbnail.append(play); }
        } else {
          thumbnail.classList.add('mega-record-cover');
          thumbnail.append(el('span', 'mega-record-year', item.cover_label || 'Research'), el('span', 'mega-record-type', item.cover_type || 'Research record'));
        }
        const copy = el('div', 'mega-feature-copy'); const action = el('span', 'mega-watch');
        action.append(navIcon(item.action === 'Watch video' ? 'play' : 'open-book'), document.createTextNode(item.action || 'Read record'));
        copy.append(el('h3', 'mega-feature-title', item.title), el('p', 'mega-description', item.description), action);
        card.append(thumbnail, copy); cards.append(card);
      }
      sidebar.append(cards);
      const actions = el('div', 'mega-actions');
      for (const item of group.actions) {
        const link = navLink(item, `mega-cta${item.primary ? ' mega-cta-primary' : ''}`);
        if (item.icon) link.append(navIcon(item.icon));
        link.append(document.createTextNode(item.title)); actions.append(link);
      }
      sidebar.append(actions); panel.append(columns, sidebar);
      detail.querySelector('.dropdown, .mega-panel')?.replaceWith(panel);
      detail.classList.add('mega-menu');
      const summary = detail.querySelector('summary'); summary.setAttribute('aria-controls', panel.id); summary.setAttribute('aria-expanded', String(detail.open));
      summary.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); detail.open = true; panel.querySelector('a')?.focus(); }
      });
    }
    header?.classList.add('has-mega-navigation');
    fitMenus();
  }
  // The existing HTML navigation remains available if the shared data cannot load.
  fetch(new URL('navigation.json', assetBase)).then(response => {
    if (!response.ok) throw new Error('Navigation data could not be loaded');
    return response.json();
  }).then(buildMegaMenus).catch(error => { console.warn(error.message); });
  const listing = document.querySelector('[data-collection]');
  if (listing) {
    const cards = [...listing.querySelectorAll('[data-card]')];
    const input = listing.querySelector('[data-filter]');
    const count = listing.querySelector('[data-count]');
    const pager = listing.querySelector('[data-page-label]');
    const prev = listing.querySelector('[data-prev]');
    const next = listing.querySelector('[data-next]');
    const empty = listing.querySelector('[data-no-results]');
    let page = 1, category = 'all';
    const size = 12;
    const render = () => {
      const q = input.value.trim().toLocaleLowerCase();
      const selected = cards.filter(card => card.dataset.search.includes(q) && (category === 'all' || card.dataset.category === category));
      const total = Math.max(1, Math.ceil(selected.length / size));
      page = Math.max(1, Math.min(page, total));
      const visible = new Set(selected.slice((page - 1) * size, page * size));
      cards.forEach(card => { card.hidden = !visible.has(card); });
      count.textContent = `${selected.length} ${selected.length === 1 ? 'record' : 'records'}`;
      pager.textContent = `Page ${page} of ${total}`;
      prev.disabled = page === 1; next.disabled = page >= total;
      empty.hidden = selected.length !== 0;
    };
    input.addEventListener('input', () => { page = 1; render(); });
    prev.addEventListener('click', () => { page--; render(); });
    next.addEventListener('click', () => { page++; render(); });
    listing.querySelectorAll('[data-category-filter]').forEach(button => button.addEventListener('click', () => {
      category = button.dataset.categoryFilter; page = 1;
      listing.querySelectorAll('[data-category-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); render();
    }));
    render();
  }
  const dialog = document.querySelector('[data-search-dialog]');
  const search = document.querySelector('[data-global-search]');
  const result = document.querySelector('[data-search-results]');
  const indexNode = document.querySelector('#site-search-index');
  const index = indexNode ? JSON.parse(indexNode.textContent) : [];
  function runSearch() {
    const q = search.value.trim().toLocaleLowerCase();
    result.replaceChildren();
    if (!q) { result.textContent = 'Search by page title or topic.'; return; }
    const matches = index.filter(item => `${item.title} ${item.section} ${item.summary}`.toLocaleLowerCase().includes(q));
    const status = document.createElement('p'); status.className = 'result-count';
    status.textContent = matches.length ? `${matches.length} results${matches.length > 40 ? ' — showing the first 40' : ''}` : 'No matching pages.'; result.append(status);
    matches.slice(0,40).forEach(item => {
      const link = document.createElement('a'); link.href = item.url;
      const title = document.createElement('span'); title.textContent = item.title;
      const section = document.createElement('small'); section.textContent = item.section;
      link.append(title, section); result.append(link);
    });
  }
  document.querySelector('[data-open-search]')?.addEventListener('click', () => { dialog.showModal(); runSearch(); search.focus(); });
  document.querySelector('[data-close-search]')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  search?.addEventListener('input', runSearch);
})();
