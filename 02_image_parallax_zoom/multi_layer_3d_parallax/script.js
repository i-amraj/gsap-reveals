gsap.registerPlugin(ScrollTrigger);

// Multi-speed parallax physics timeline
const container = document.querySelector(".depth-container");

// Background Layer: Slow
gsap.to(".layer-bg", {
  yPercent: -15,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

// Subject Card Layer: Medium
gsap.to(".layer-card", {
  yPercent: -35,
  scale: 1.08,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top bottom",
    end: "bottom top",
    scrub: 1.2
  }
});

// Foreground Text Layer: Fast
gsap.to(".layer-fg", {
  yPercent: -75,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    start: "top bottom",
    end: "bottom top",
    scrub: 1.5
  }
});
