const cursor = document.getElementById("cursor");

// Track cursor position instantly
const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "none" });
const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "none" });

// Color palette for the trail particles
const colors = ["#a78bfa", "#60a5fa", "#34d399", "#f472b6", "#fb923c", "#fff"];

let mouseX = 0;
let mouseY = 0;
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  xTo(mouseX);
  yTo(mouseY);

  // Only spawn a particle if the mouse has moved enough distance
  const dist = Math.hypot(mouseX - lastX, mouseY - lastY);
  if (dist > 12) {
    spawnParticle(mouseX, mouseY);
    lastX = mouseX;
    lastY = mouseY;
  }
});

function spawnParticle(x, y) {
  const p = document.createElement("div");
  p.classList.add("particle");

  // Random size
  const size = gsap.utils.random(5, 16);
  const color = colors[Math.floor(Math.random() * colors.length)];

  p.style.width  = size + "px";
  p.style.height = size + "px";
  p.style.background = color;
  p.style.left = x + "px";
  p.style.top  = y + "px";
  p.style.boxShadow = `0 0 ${size * 2}px ${color}`;

  document.body.appendChild(p);

  // Animate the particle: float up, fade out, then remove from DOM
  gsap.to(p, {
    y: gsap.utils.random(-60, -120),
    x: gsap.utils.random(-30, 30),
    scale: 0,
    opacity: 0,
    duration: gsap.utils.random(0.6, 1.2),
    ease: "power2.out",
    onComplete: () => p.remove() // Clean up
  });
}
