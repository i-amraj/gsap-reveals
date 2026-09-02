// GSAP quickTo is the gold standard for cursor tracking.
// It creates an optimized setter that can be called every frame without overhead.

const cursor = document.getElementById("cursor");

// Create quickTo functions for X and Y positions.
// The second argument is the CSS property to animate.
// The third argument is the config: duration (lag) and ease.
const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" });
const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" });

// Listen to mouse movement on the window
window.addEventListener("mousemove", (e) => {
  // Call the quickTo functions with the current mouse coordinates
  xTo(e.clientX);
  yTo(e.clientY);
});

// Optional: Scale the cursor when it leaves the window
document.addEventListener("mouseleave", () => {
  gsap.to(cursor, { scale: 0, duration: 0.3 });
});
document.addEventListener("mouseenter", () => {
  gsap.to(cursor, { scale: 1, duration: 0.3 });
});
