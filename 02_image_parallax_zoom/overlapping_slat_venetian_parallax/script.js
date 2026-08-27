gsap.registerPlugin(ScrollTrigger);

const strips = document.querySelectorAll(".strip");
const stripSection = document.querySelector(".strip-section");

// Staggered parallax speed offsets per strip
const yOffsets = [-15, -35, -55, -35, -15];

strips.forEach((strip, index) => {
  gsap.to(strip, {
    yPercent: yOffsets[index],
    ease: "none",
    scrollTrigger: {
      trigger: stripSection,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
});
