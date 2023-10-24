//////////////////////////////////////////////////////////
// Sticky Nav

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//////////////////////////////////////////////////////////
//  Active Navbar
const navLinks = document.querySelectorAll(".nav__btn");
const windowPath = window.location.pathname;

navLinks.forEach((el) => {
  if (el.href.includes(windowPath)) {
    el.classList.add("active");
  }
});

/////////////////////////////////////////////////////////////
// Reveal Elements

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});

/////////////////////////////////////////////////////////
// Auto Type
const typed = new Typed(".auto-type", {
  strings: ["Skilled", "Talented", "Creative"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
