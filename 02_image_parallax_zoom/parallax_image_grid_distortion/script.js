gsap.registerPlugin(ScrollTrigger);

const gridSection = document.querySelector(".grid-section");
const col1 = document.querySelector(".col-1");
const col2 = document.querySelector(".col-2");
const col3 = document.querySelector(".col-3");

// Columns 1 & 3 move UP
gsap.to([col1, col3], {
  yPercent: -25,
  ease: "none",
  scrollTrigger: {
    trigger: gridSection,
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

// Column 2 moves DOWN
gsap.to(col2, {
  yPercent: 25,
  ease: "none",
  scrollTrigger: {
    trigger: gridSection,
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});
