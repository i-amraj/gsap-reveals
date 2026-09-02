gsap.registerPlugin(ScrollTrigger);

// Instead of moving left, we rotate the cylinder along the Y axis
gsap.to("#cylinder", {
  rotateY: -360,
  ease: "none",
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: "+=3000" // Scroll distance required for full 360
  }
});
