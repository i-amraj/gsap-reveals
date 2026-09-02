const rect = document.getElementById("card-border");
const card = document.getElementById("hover-card");
const length = rect.getTotalLength();

// Start hidden
gsap.set(rect, {
  strokeDasharray: length,
  strokeDashoffset: length
});

// Create animation (paused initially)
const hoverAnim = gsap.to(rect, {
  strokeDashoffset: 0,
  duration: 0.6,
  ease: "power2.out",
  paused: true
});

card.addEventListener("mouseenter", () => hoverAnim.play());
card.addEventListener("mouseleave", () => hoverAnim.reverse());
