gsap.registerPlugin(ScrollTrigger);

const splitSection = document.querySelector(".split-section");
const leftImg = document.querySelector(".left-img");
const rightImg = document.querySelector(".right-img");

// Left Column: Moves UP
gsap.to(leftImg, {
  yPercent: -35,
  ease: "none",
  scrollTrigger: {
    trigger: splitSection,
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

// Right Column: Moves DOWN
gsap.to(rightImg, {
  yPercent: 35,
  ease: "none",
  scrollTrigger: {
    trigger: splitSection,
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});
