const container = document.querySelector("#image-layer");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 50;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnMaskImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnMaskImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("mask-img");
  
  img.style.left = `${x - 150}px`;
  img.style.top = `${y - 150}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  tl.to(img, {
    scale: 1,
    rotation: gsap.utils.random(-15, 15),
    duration: 0.5,
    ease: "power2.out"
  })
  .to(img, {
    scale: 0.2,
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut"
  }, "+=0.2");
}
