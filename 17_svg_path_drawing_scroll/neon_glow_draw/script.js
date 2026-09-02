gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("neon-path");
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

gsap.to(path, {
  strokeDashoffset: 0,
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".neon-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
