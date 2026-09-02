gsap.registerPlugin(ScrollTrigger);

const path = document.getElementById("draw-path");
// Get the exact total length of the SVG path
const length = path.getTotalLength();

// Apply the length to dasharray and dashoffset
gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

// Animate offset to 0 to "draw" the line
gsap.to(path, {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".svg-section",
    start: "top 60%", // Start drawing when top of section is 60% down the viewport
    end: "bottom 80%", // Finish drawing here
    scrub: 1 // Link to scrollbar
  }
});
