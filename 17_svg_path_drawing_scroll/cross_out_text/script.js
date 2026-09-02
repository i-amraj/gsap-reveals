gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("cross-path");
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cross-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

tl.to(path, { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" })
  .to(".new-price", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, "+=0.2");
