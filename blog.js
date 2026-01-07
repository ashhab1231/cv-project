/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

/* =========================
   DARK MODE TOGGLE
========================= */
const toggleBtn = document.getElementById("themeToggle");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

/* =========================
   BLOG CARD INTERACTION
========================= */
const blogCards = document.querySelectorAll(".blog-card");

blogCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
