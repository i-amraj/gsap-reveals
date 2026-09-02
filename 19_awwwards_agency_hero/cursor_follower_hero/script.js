// 1. Custom Cursor Follower Logic
const dot = document.querySelector(".cursor-dot");
const follower = document.querySelector(".cursor-follower");

// Use GSAP quickTo for highly performant mouse tracking
const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToDot(e.clientX);
  yToDot(e.clientY);
  xToFollower(e.clientX);
  yToFollower(e.clientY);
});

// 2. Magnetic Button Logic
const magneticBtn = document.querySelector(".magnetic-btn");
const btnText = document.querySelector(".btn-text");

magneticBtn.addEventListener("mousemove", (e) => {
  const rect = magneticBtn.getBoundingClientRect();
  // Calculate distance from center of button
  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);
  
  // Move button slightly towards mouse
  gsap.to(magneticBtn, { x: x * 0.4, y: y * 0.4, duration: 0.5, ease: "power2.out" });
  // Move text a bit more for parallax
  gsap.to(btnText, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: "power2.out" });
});

magneticBtn.addEventListener("mouseleave", () => {
  // Snap back to origin
  gsap.to(magneticBtn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
  gsap.to(btnText, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
});

// Add follower state changes on hover
magneticBtn.addEventListener("mouseenter", () => follower.classList.add("active"));
magneticBtn.addEventListener("mouseleave", () => follower.classList.remove("active"));
