gsap.registerPlugin(ScrollTrigger);

gsap.to(".color-text", {
  color: "#3b82f6", // Shifts to blue
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".color-section",
    start: "top 50%",
    toggleActions: "play reverse play reverse"
  }
});
