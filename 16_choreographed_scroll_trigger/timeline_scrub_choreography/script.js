gsap.registerPlugin(ScrollTrigger);

// Create a complex timeline that is entirely driven by scroll progress
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#choreo-section",
    start: "top top", // When top of section hits top of viewport
    end: "bottom bottom", // When bottom of section hits bottom of viewport
    scrub: 1 // Smooth scrubbing
  }
});

// Choreograph the sequence using the timeline
tl.to(".e1", { left: "20%", top: "40%", duration: 2 })
  .to(".e2", { bottom: "40%", right: "30%", duration: 2 }, "<0.5") // Start 0.5s after e1 starts
  .to(".e3", { top: "30%", right: "40%", duration: 2 }, "<0.5")
  .to(".element-text", { opacity: 1, scale: 1, duration: 1 }, "-=1") // Reveal text near the end of shapes moving
  .to(".e1, .e2, .e3", { scale: 3, opacity: 0, duration: 1 }); // Expand and fade out shapes at the very end
