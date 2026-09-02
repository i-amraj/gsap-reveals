gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("underline-path");
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

gsap.to(path, {
  strokeDashoffset: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".underline-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
