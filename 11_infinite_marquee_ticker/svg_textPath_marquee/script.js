// The exact same -50% seamless loop concept, 
// applied to the SVG 'startOffset' attribute instead of CSS transform.

gsap.to(".svg-marquee-text", {
  attr: { startOffset: "-50%" },
  ease: "none",
  duration: 15,
  repeat: -1
});
