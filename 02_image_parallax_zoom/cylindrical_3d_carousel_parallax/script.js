gsap.registerPlugin(ScrollTrigger);

const ring = document.querySelector(".cylinder-ring");

gsap.to(ring, {
  rotateY: -270,
  ease: "none",
  scrollTrigger: {
    trigger: ".cylinder-pin",
    start: "top top",
    end: "+=2500",
    scrub: 1,
    pin: true
  }
});
