gsap.registerPlugin(ScrollTrigger);

const frames = document.querySelectorAll(".tunnel-frame");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tunnel-pin",
    start: "top top",
    end: "+=2500",
    scrub: 1,
    pin: true
  }
});

// Staggered concentric tunnel camera zoom
frames.forEach((frame, i) => {
  gsap.set(frame, { scale: 0.2 + i * 0.3, z: -600 + i * 300, opacity: 0.5 });

  tl.to(frame, {
    scale: 2.8,
    z: 600,
    opacity: 1,
    ease: "none"
  }, i * 0.4);
});
