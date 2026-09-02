gsap.registerPlugin(ScrollTrigger);

const fgLayer = document.getElementById("fg-layer");

gsap.to(fgLayer, {
  clipPath: "circle(150% at 50% 50%)",
  ease: "none",
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: "+=2000"
  }
});
