gsap.registerPlugin(ScrollTrigger);

gsap.to(".stagger-line", {
  scrollTrigger: {
    trigger: ".stagger-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  },
  y: "0%", // Slide up to original position
  duration: 1,
  stagger: 0.15,
  ease: "power4.out"
});
