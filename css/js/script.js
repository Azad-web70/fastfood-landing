// ****sticky navigation*******
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin:"-80px"
  }
);
const sectionheroEl = document.querySelector(".section-hero");
obs.observe(sectionheroEl);

// ****mobile navigation*****
const btnNavEl = document.querySelector(".btn-mobile");
const headerEL = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
const alllinks = document.querySelectorAll(".main-nav-link");
alllinks.forEach(function (linkEl) {
  linkEl.addEventListener("click", function () {
    headerEL.classList.toggle("nav-open");
  });
});
