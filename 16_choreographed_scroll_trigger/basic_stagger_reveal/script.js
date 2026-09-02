gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
  stagger: 0.15, // Delay between each element
  scrollTrigger: {
    trigger: "#grid-section",
    start: "top 70%", // Trigger when section is 70% from top of viewport
    toggleActions: "play none none reverse" // Play on enter, reverse on leave back up
  }
});
