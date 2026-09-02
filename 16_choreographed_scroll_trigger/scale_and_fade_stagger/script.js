gsap.registerPlugin(ScrollTrigger);

gsap.to(".sf-box", {
  scale: 1,
  opacity: 1,
  duration: 0.6,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".stagger-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});
