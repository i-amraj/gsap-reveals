gsap.registerPlugin(ScrollTrigger);

// Animate the entire cylinder rotating on the X axis as user scrolls
gsap.to(".wheel-container", {
  rotationX: -360, // Full backward spin
  ease: "none",
  scrollTrigger: {
    trigger: ".wheel-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

// Animate the text sliding horizontally infinitely
gsap.to(".wheel-text", {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1
});
