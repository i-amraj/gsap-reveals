const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 50;

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnVortexImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnVortexImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("vortex-img");
  
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  // Pop in at cursor
  tl.to(img, { scale: 1, duration: 0.3, ease: "back.out(1.5)" })
  // Suck into center
  .to(img, {
    left: centerX,
    top: centerY,
    scale: 0,
    rotation: gsap.utils.random(180, 720) * (Math.random() > 0.5 ? 1 : -1),
    opacity: 0.2,
    duration: 1.5,
    ease: "power3.in" // Accelerate into the hole
  }, "+=0.1");
}
