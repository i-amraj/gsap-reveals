gsap.registerPlugin(ScrollTrigger);

gsap.to(".grid-box", {
  scale: 1,
  opacity: 1,
  rotate: 0,
  duration: 0.8,
  ease: "back.out(1.5)",
  // Advanced stagger object allows for grid-based cascade
  stagger: {
    amount: 1,      // Total time distributed among all elements
    grid: [3, 3],   // Number of rows and columns
    from: "edges",  // Cascade from the edges to the center
    ease: "power2.inOut" 
  },
  scrollTrigger: {
    trigger: ".grid-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
