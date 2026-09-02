gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("chart-path");
const length = path.getTotalLength();

gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".chart-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

tl.to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out" })
  .to("#chart-fill", { opacity: 1, duration: 0.5 }, "-=0.5");
