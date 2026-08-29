const container = document.querySelector(".trail-container");

const images = [
  "../../assets/nature1.jpeg",
  "../../assets/nature2.jpeg"
];

let currentIndex = 0;
let lastPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const spawnThreshold = 50;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  
  const dx = currentPos.x - lastPos.x;
  const dy = currentPos.y - lastPos.y;
  const dist = Math.hypot(dx, dy);
  
  if (dist > spawnThreshold) {
    // Calculate angle in radians, then convert to degrees
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    // Stretch based on distance covered between frames
    // Cap the stretch scale so it doesn't get ridiculously long
    const stretchScale = Math.min(Math.max(dist / spawnThreshold, 1), 3);
    
    spawnVelocityImage(currentPos.x, currentPos.y, angle, stretchScale);
    lastPos = currentPos;
  }
});

function spawnVelocityImage(x, y, angle, stretchScale) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("velocity-img");
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // Set initial position, rotation, and scaleX (stretch)
  gsap.set(img, {
    x: x - 75, // Center (width 150 / 2)
    y: y - 75,
    rotation: angle,
    scaleX: stretchScale,
    scaleY: 1 - ((stretchScale - 1) * 0.2), // Shrink Y slightly as X stretches (volume preservation)
    opacity: 1
  });
  
  // Animate back to normal shape while fading out
  const tl = gsap.timeline({
    onComplete: () => img.remove()
  });
  
  tl.to(img, {
    scaleX: 1,
    scaleY: 1,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
}
