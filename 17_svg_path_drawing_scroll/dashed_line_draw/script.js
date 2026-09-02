gsap.registerPlugin(ScrollTrigger);

// To draw a dashed line, we actually animate a solid mask path revealing the dashed path underneath.
const maskPath = document.getElementById("solid-mask-path");
const length = maskPath.getTotalLength();

gsap.set(maskPath, {
  strokeDasharray: length,
  strokeDashoffset: length
});

gsap.to(maskPath, {
  strokeDashoffset: 0,
  duration: 2,
  ease: "none",
  scrollTrigger: {
    trigger: ".dashed-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});
