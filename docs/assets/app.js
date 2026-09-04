(() => {
  'use strict';
  const root = document.documentElement;
  const theme = document.querySelector('[data-theme-toggle]');
  theme?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    theme.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} theme`);
    try { localStorage.setItem('academic-theme', next); } catch (_) { /* Storage is optional. */ }
  });
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  const details = [...document.querySelectorAll('nav details')];
  details.forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) details.filter(other => other !== detail).forEach(other => { other.open = false; });
  }));
  document.addEventListener('click', e => { if (!e.target.closest('nav details')) details.forEach(d => { d.open = false; }); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { details.forEach(d => { d.open = false; }); nav?.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false'); }
  });
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
      count.textContent = `${selected.length} ${selected.length === 1 ? 'page' : 'pages'}`;
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
