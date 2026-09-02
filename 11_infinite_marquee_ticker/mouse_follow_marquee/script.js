// The base infinite loop tween
let marqueeTween = gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// Attach listener to track mouse X position
window.addEventListener("mousemove", (e) => {
  // Normalize X position to a 0 to 1 scale
  let xRatio = e.clientX / window.innerWidth;
  
  // Map to a speed multiplier:
  // 0.5 (center) becomes 0.
  // 0 (left edge) becomes -3 (reverse fast).
  // 1 (right edge) becomes +3 (forward fast).
  let speed = (xRatio - 0.5) * 6;
  
  // Create a small "deadzone" in the center so the user can easily pause it
  if (Math.abs(speed) < 0.5) {
    speed = 0;
  }
  
  // Smoothly animate the timeScale to the new calculated speed
  gsap.to(marqueeTween, {
    timeScale: speed,
    duration: 0.5, // Eases the transition so it doesn't jerk
    ease: "power2.out",
    overwrite: true
  });
});
