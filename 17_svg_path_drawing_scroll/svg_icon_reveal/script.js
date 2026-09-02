gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("heart-path");
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length,
  fill: "rgba(239, 68, 68, 0)" // transparent red
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".icon-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

// Draw outline, then fill
tl.to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" })
  .to(path, { fill: "rgba(239, 68, 68, 1)", duration: 0.5 }, "-=0.3");
