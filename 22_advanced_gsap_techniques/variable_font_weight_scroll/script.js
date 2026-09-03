gsap.registerPlugin(ScrollTrigger);

// Tween the font-weight CSS property dynamically
// Modern browsers support tweening the 'fontWeight' of variable fonts natively.
gsap.to(".variable-text", {
  fontWeight: 900, // Animate to ultra-black
  letterSpacing: "10px", // Expand letter spacing alongside weight
  ease: "none",
  scrollTrigger: {
    trigger: ".font-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});
