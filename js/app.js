/* Theme toggle, mobile menu, command-K palette */
(function () {
  // ----- Theme -----
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle-theme]");
    if (!btn) return;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // ----- Mobile menu -----
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle-menu]");
    if (!btn) return;
    document.querySelector(".nav-links")?.classList.toggle("open");
  });

  // ----- Command-K palette -----
  const pages = [
    { t: "Home", u: "/index.html" },
    { t: "About", u: "/pages/about.html" },
    { t: "Resume", u: "/pages/resume.html" },
    { t: "Contact", u: "/pages/contact.html" },
    { t: "Research", u: "/pages/research.html" },
    { t: "Publications", u: "/pages/publications.html" },
    { t: "Books", u: "/pages/books.html" },
    { t: "Codes / Projects", u: "/pages/codes.html" },
    { t: "Highlights", u: "/pages/highlights.html" },
    { t: "Blogs", u: "/pages/blogs.html" },
    { t: "Talks", u: "/pages/talks.html" },
    { t: "Workshops", u: "/pages/workshops.html" },
    { t: "Awards", u: "/pages/awards.html" },
    { t: "Funding", u: "/pages/funding.html" },
    { t: "Outreach", u: "/pages/outreach.html" },
    { t: "Press", u: "/pages/press.html" },
    { t: "News", u: "/pages/news.html" },
    { t: "Videos", u: "/pages/videos.html" },
    { t: "Frameworks", u: "/pages/frameworks.html" },
    { t: "Role — Computational Scientist", u: "/pages/computational-scientist.html" },
    { t: "Role — Designer / Animator", u: "/pages/designer-animator.html" },
    { t: "Role — Web / Android Developer", u: "/pages/web-android-developer.html" },
    { t: "Role — Entrepreneur", u: "/pages/entrepreneur.html" },
    { t: "Terms", u: "/pages/terms.html" },
    { t: "Privacy", u: "/pages/privacy.html" },
    { t: "Cookies", u: "/pages/cookies.html" }
  ];

  function ensurePalette() {
    if (document.querySelector(".cmdk-overlay")) return;
    const overlay = document.createElement("div");
    overlay.className = "cmdk-overlay";
    overlay.innerHTML = `
      <div class="cmdk" role="dialog" aria-label="Search">
        <input type="text" placeholder="Search pages…" autocomplete="off" />
        <ul></ul>
      </div>`;
    document.body.appendChild(overlay);

    const input = overlay.querySelector("input");
    const list = overlay.querySelector("ul");
    const base = location.pathname.includes("/pages/") ? ".." : ".";

    function render(q = "") {
      const ql = q.toLowerCase();
      const items = pages.filter(p => p.t.toLowerCase().includes(ql));
      list.innerHTML = items.map((p, i) =>
        `<li><a href="${base}${p.u}" class="${i === 0 ? "active" : ""}">${p.t}</a></li>`
      ).join("") || `<li style="padding:14px;color:var(--text-muted);font-family:var(--sans);font-size:.9rem">No matches</li>`;
    }
    render();

    input.addEventListener("input", e => render(e.target.value));
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const a = list.querySelector("a");
        if (a) location.href = a.href;
      }
    });
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closePalette();
    });
  }

  function openPalette() {
    ensurePalette();
    const overlay = document.querySelector(".cmdk-overlay");
    overlay.classList.add("open");
    overlay.querySelector("input").focus();
  }
  function closePalette() {
    document.querySelector(".cmdk-overlay")?.classList.remove("open");
  }

  document.addEventListener("click", e => {
    if (e.target.closest("[data-open-search]")) { e.preventDefault(); openPalette(); }
  });
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault(); openPalette();
    } else if (e.key === "Escape") {
      closePalette();
    }
  });

  // ----- Active nav link -----
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href").split("/").pop();
    if (href === path) a.classList.add("active");
  });
})();
