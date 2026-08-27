gsap.registerPlugin(ScrollTrigger);

// Color Layer Clip-Path Circle Expansion
gsap.to(".color-img", {
  clipPath: "circle(100% at 50% 50%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".compare-container",
    start: "top top",
    end: "+=1200",
    scrub: 1,
    pin: true
  }
});
