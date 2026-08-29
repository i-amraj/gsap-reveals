const container = document.querySelector(".trail-container");
const turb = document.querySelector("#turb");
const disp = document.querySelector("#disp");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80;

// Animate the global SVG filter continuously for rippling water effect
gsap.to(turb, { attr: { baseFrequency: 0.05 }, duration: 8, repeat: -1, yoyo: true });

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnRippleImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnRippleImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("ripple-img");
  
  img.style.left = `${x - 110}px`;
  img.style.top = `${y - 110}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  tl.to(img, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  })
  .to(img, {
    scale: 1.5, // Expand as it dissolves
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  }, "+=0.2");
}
