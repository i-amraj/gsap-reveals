gsap.registerPlugin(ScrollTrigger);

gsap.to(".blur-item", {
  filter: "blur(0px)",
  opacity: 1,
  scale: 1,
  duration: 1.5,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".blur-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
