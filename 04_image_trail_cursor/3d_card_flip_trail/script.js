const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnFlipImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnFlipImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("flip-img");
  
  img.style.left = `${x - 100}px`;
  img.style.top = `${y - 140}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // Set initial 3D state
  gsap.set(img, { rotationY: -180, scale: 0.5, opacity: 0 });
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  tl.to(img, {
    rotationY: 0,
    scale: 1,
    opacity: 1,
    duration: 0.6,
    ease: "back.out(1.5)"
  })
  .to(img, {
    rotationY: 180,
    scale: 0.5,
    opacity: 0,
    duration: 0.6,
    ease: "power2.in"
  }, "+=0.3"); // Hold for 0.3s
}
