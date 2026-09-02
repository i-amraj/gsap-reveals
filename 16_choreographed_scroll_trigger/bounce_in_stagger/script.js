gsap.registerPlugin(ScrollTrigger);

gsap.to(".bounce-ball", {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "bounce.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".bounce-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
