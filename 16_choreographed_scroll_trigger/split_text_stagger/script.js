gsap.registerPlugin(ScrollTrigger);

gsap.to(".word", {
  y: "0%",
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".split-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
