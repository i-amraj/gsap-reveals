gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("erase-path");
const length = path.getTotalLength();

// Start fully drawn
gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: 0
});

// Animate offset to length to "erase" it
gsap.to(path, {
  strokeDashoffset: length,
  ease: "none",
  scrollTrigger: {
    trigger: ".erase-section",
    start: "top 70%",
    end: "bottom 50%",
    scrub: 1
  }
});
