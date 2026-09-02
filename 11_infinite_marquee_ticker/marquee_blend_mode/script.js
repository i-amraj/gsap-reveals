// Standard infinite loop.
// The CSS mix-blend-mode: difference does the heavy lifting visually.
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 20,
  repeat: -1
});
