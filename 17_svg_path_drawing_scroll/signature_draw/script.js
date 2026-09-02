gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("sig-path");
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sig-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

tl.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.out" })
  .to("h3", { opacity: 1, y: 0, duration: 0.5 }, "-=0.5"); // Fade in printed name underneath
