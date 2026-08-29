const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
const filters = ["url(#neon-pink)", "url(#neon-blue)", "url(#neon-green)", "url(#neon-yellow)"];

let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 50;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnNeonImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnNeonImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("neon-img");
  
  // Apply random neon filter
  const randomFilter = filters[Math.floor(Math.random() * filters.length)];
  img.style.filter = randomFilter;
  
  img.style.left = `${x - 80}px`;
  img.style.top = `${y - 80}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  tl.to(img, {
    scale: 1,
    rotation: gsap.utils.random(-30, 30),
    duration: 0.3,
    ease: "back.out(1.5)"
  })
  .to(img, {
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut"
  }, "+=0.2");
}
