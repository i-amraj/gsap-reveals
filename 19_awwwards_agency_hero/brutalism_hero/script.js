const tl = gsap.timeline();

// Drop the box in with a heavy, bouncy brutalist feel
tl.from(".hero-box", {
  y: -500,
  rotation: -20,
  duration: 1.5,
  ease: "bounce.out"
});

// Infinite marquee logic
gsap.to(".tape-1 .tape-content", {
  xPercent: -50,
  ease: "none",
  duration: 5,
  repeat: -1
});

gsap.to(".tape-2 .tape-content", {
  xPercent: -50,
  ease: "none",
  duration: 4, // slightly faster
  repeat: -1,
  yoyo: true // brutal bouncing back and forth
});

// Add a harsh hover state to the box
const box = document.querySelector(".hero-box");
box.addEventListener("mouseenter", () => {
  gsap.to(box, { backgroundColor: "#f0f", color: "#fff", scale: 1.1, rotation: 5, duration: 0.1 });
});
box.addEventListener("mouseleave", () => {
  gsap.to(box, { backgroundColor: "#fff", color: "#000", scale: 1, rotation: 0, duration: 0.1 });
});
