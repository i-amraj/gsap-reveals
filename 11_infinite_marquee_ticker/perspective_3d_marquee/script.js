// The GSAP animation itself remains perfectly standard.
// All the 3D magic is handled cleanly by CSS transforms on the parent container.

gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});
