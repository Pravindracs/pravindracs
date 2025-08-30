function togglePopup() {
  alert("Profile picture clicked! (Replace this with CV or popup info)");
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Update active nav + URL on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.section === current) {
      link.classList.add("active");
    }
  });

  if (current) {
    history.replaceState(null, null, "/" + current);
  }
});

// Smooth scroll + update URL
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.dataset.section;
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, "/" + targetId);
    }
  });
});

// On page load, jump to section based on path
window.addEventListener("load", () => {
  let path = window.location.pathname.replace("/", "");
  if (path) {
    const target = document.getElementById(path);
    if (target) {
      target.scrollIntoView();
    }
  }
});