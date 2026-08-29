const container = document.querySelector(".trail-container");
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 40;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnSpotlight(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnSpotlight(x, y) {
  const mask = document.createElement("div");
  mask.classList.add("spotlight-mask");
  
  mask.style.left = `${x}px`;
  mask.style.top = `${y}px`;
  
  container.appendChild(mask);
  
  const tl = gsap.timeline({ onComplete: () => mask.remove() });
  
  tl.to(mask, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
  })
  .to(mask, {
    scale: 1.5,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  }, "+=0.1"); // Slight hold then fade out
}
