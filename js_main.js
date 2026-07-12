const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));