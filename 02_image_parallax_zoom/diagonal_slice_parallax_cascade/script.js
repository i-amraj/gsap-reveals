gsap.registerPlugin(ScrollTrigger);

const diagSection = document.querySelector(".diag-section");
const slice1 = document.querySelector(".slice-1");
const slice2 = document.querySelector(".slice-2");
const slice3 = document.querySelector(".slice-3");
const slice4 = document.querySelector(".slice-4");

// Initial 45-degree offset positions
gsap.set(slice1, { x: -80, y: -80 });
gsap.set(slice2, { x: 60, y: -60 });
gsap.set(slice3, { x: -50, y: 50 });
gsap.set(slice4, { x: 90, y: 90 });

// Animate slices into perfect grid alignment on scroll
gsap.to([slice1, slice2, slice3, slice4], {
  x: 0,
  y: 0,
  ease: "none",
  scrollTrigger: {
    trigger: diagSection,
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
});
