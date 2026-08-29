const container = document.querySelector(".trail-container");
const morphNode = document.querySelector("#morphRadius");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnPixelImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnPixelImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("pixel-img");
  img.style.left = `${x - 110}px`;
  img.style.top = `${y - 150}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // Clone the filter so each image can resolve independently
  // For simplicity without messy DOM cloning, we'll animate the image scale and opacity while the global filter affects it, 
  // but to truly resolve independently we need to animate a CSS blur or SVG filter per element.
  // We'll simulate it by animating the image blur filter as it scales up.
  gsap.set(img, { filter: "blur(15px) contrast(2)", scale: 0.5 });
  
  const tl = gsap.timeline({ onComplete: () => img.remove() });
  
  tl.to(img, {
    scale: 1,
    filter: "blur(0px) contrast(1)",
    duration: 0.5,
    ease: "steps(6)" // Chunky resolution feel
  })
  .to(img, {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut"
  }, "+=0.3");
}
