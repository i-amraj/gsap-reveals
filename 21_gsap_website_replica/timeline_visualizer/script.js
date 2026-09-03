// Create the main timeline we are visualizing
const mainTl = gsap.timeline({ paused: true });

// Add the animations (note the overlap)
mainTl.to(".red", { x: 600, duration: 1 })
      .to(".green", { x: 600, duration: 1 }, "-=0.25")
      .to(".blue", { x: 600, duration: 1 }, "-=0.25");

// Animate the playhead to match the total duration of the main timeline
// In a real visualizer, we would map progress directly, but for this replica 
// we just sync a tween.
const playheadTl = gsap.timeline({ paused: true });
playheadTl.to("#playhead", {
  left: "80%", // End of the tracks visual
  duration: mainTl.duration(),
  ease: "none"
});

document.getElementById("play-btn").addEventListener("click", () => {
  mainTl.restart();
  playheadTl.restart();
});
