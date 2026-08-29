const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 60;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnSplatterImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnSplatterImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("splatter-img");
  
  img.style.left = `${x - 125}px`;
  img.style.top = `${y - 125}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  tl.to(img, {
    scale: 1,
    rotation: gsap.utils.random(-180, 180), // random splatter angle
    duration: 0.2, // very fast pop like paint hitting canvas
    ease: "power2.out"
  })
  .to(img, {
    scale: 1.1,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "+=0.3");
}
