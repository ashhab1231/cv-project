/* =========================
   DARK MODE TOGGLE (GLOBAL)
========================= */
const toggleBtn = document.getElementById("themeToggle");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

/* =========================
   SMOOTH SCROLLING (SAFE)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId && targetId.length > 1) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

/* =========================
   CONTACT FORM (OPTIONAL)
========================= */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}

/* =========================
   HOVER ANIMATION (UI POLISH)
========================= */
const buttons = document.querySelectorAll(".btn, .submit-btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
