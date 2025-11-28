// Basic interactions: hamburger, sticky header color on scroll, smooth scroll, simple carousel
const header = document.getElementById("site-header");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Hamburger open/close
hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  navMenu.classList.toggle("active");
});

// Sticky header background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // close mobile menu if open
      if (window.innerWidth <= 480) {
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// Testimonials are now displayed in a grid - no carousel needed
