const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  nav?.classList.toggle("is-open");
});

document.querySelectorAll("[data-nav] a").forEach((link) => {
  link.addEventListener("click", () => nav?.classList.remove("is-open"));
});

const counters = document.querySelectorAll("[data-count]");
if (counters.length) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const end = Number(target.dataset.count || 0);
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          target.textContent = Math.round(end * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(target);
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

const canvas = document.getElementById("moleculeCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const particles = [];
  const particleCount = window.matchMedia("(max-width: 760px)").matches ? 32 : 58;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * window.devicePixelRatio);
    canvas.height = Math.floor(rect.height * window.devicePixelRatio);
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function resetParticles() {
    particles.length = 0;
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < particleCount; i += 1) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: 1.5 + Math.random() * 2.8,
      });
    }
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > rect.width) p.vx *= -1;
      if (p.y < 0 || p.y > rect.height) p.vy *= -1;

      for (let j = index + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 132) {
          ctx.strokeStyle = `rgba(104, 243, 255, ${0.17 * (1 - distance / 132)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
      gradient.addColorStop(0, "rgba(104, 243, 255, 0.95)");
      gradient.addColorStop(1, "rgba(104, 243, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resizeCanvas();
  resetParticles();
  draw();
  window.addEventListener("resize", () => {
    resizeCanvas();
    resetParticles();
  });
}

const searchInput = document.querySelector("[data-search]");
const filterButtons = document.querySelectorAll("[data-filter]");
const posts = document.querySelectorAll("[data-post-grid] .post-card");
let activeFilter = "all";

function updatePosts() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  posts.forEach((post) => {
    const category = post.dataset.category || "";
    const title = post.dataset.title || "";
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = !query || `${category} ${title}`.toLowerCase().includes(query);
    post.classList.toggle("is-hidden", !(matchesFilter && matchesSearch));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    updatePosts();
  });
});

searchInput?.addEventListener("input", updatePosts);

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (!button) return;
    const originalText = button.textContent;
    button.textContent = "Received";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
      updatePosts();
    }, 1600);
  });
});
