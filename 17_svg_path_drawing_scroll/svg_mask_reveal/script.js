gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("mask-path");
const length = path.getTotalLength();

// Start completely hidden (undrawn mask)
gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

gsap.to(path, {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".mask-section",
    start: "top 70%",
    end: "bottom 60%",
    scrub: 1
  }
});
