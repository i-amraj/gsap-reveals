// The CSS handles the diagonal skew and layout.
// GSAP simply handles the clean, infinite -50% loop.
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1
});
