gsap.registerPlugin(ScrollTrigger);

gsap.to(".inner", {
  rotateX: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.15,
  ease: "back.out(1.2)",
  scrollTrigger: {
    trigger: ".flip-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});
