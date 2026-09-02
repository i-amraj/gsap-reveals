gsap.registerPlugin(ScrollTrigger);

gsap.to(".rot-card", {
  rotateY: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1)",
  scrollTrigger: {
    trigger: ".rotate-section",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});
