const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnTunnelImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnTunnelImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("tunnel-img");
  
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  gsap.to(img, {
    scale: 20, // Huge scale up
    rotation: gsap.utils.random(-90, 90),
    opacity: 1,
    duration: 1.5,
    ease: "power2.in",
    onComplete: () => img.remove()
  });

  // Fade out right before it completes
  gsap.to(img, {
    opacity: 0,
    duration: 0.3,
    delay: 1.2,
    ease: "power2.out"
  });
}
