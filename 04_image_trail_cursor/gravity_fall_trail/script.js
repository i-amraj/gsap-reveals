const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 60;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnGravityImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnGravityImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("gravity-img");
  
  // Center exactly on mouse
  img.style.left = `${x - 90}px`;
  img.style.top = `${y - 120}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  // Pop in
  tl.to(img, { scale: 1, duration: 0.3, ease: "back.out(1.5)" })
  // Fall with gravity physics
  .to(img, {
    y: window.innerHeight + 300, // fall past bottom
    rotation: gsap.utils.random(-60, 60),
    opacity: 0,
    duration: gsap.utils.random(1.2, 1.8),
    ease: "power2.in"
  }, "-=0.1"); // overlap slightly
}
