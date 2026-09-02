// Standard -50% loop.
// The CSS background-attachment: fixed handles all the visual magic.
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 20,
  repeat: -1
});
