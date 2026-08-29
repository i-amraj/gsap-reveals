const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80;
const polaroidsArray = [];

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnPolaroid(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnPolaroid(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("polaroid");
  
  img.style.left = `${x - 80}px`;
  img.style.top = `${y - 95}px`;
  
  container.appendChild(img);
  polaroidsArray.push(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // Cap max elements to 30 to prevent lag
  if (polaroidsArray.length > 30) {
    const oldest = polaroidsArray.shift();
    gsap.to(oldest, { opacity: 0, duration: 0.5, onComplete: () => oldest.remove() });
  }

  // Calculate fall distance (ground line)
  const windowHeight = window.innerHeight;
  const fallTargetY = windowHeight - y - 190 + gsap.utils.random(-20, 20); // slight random overlap
  const finalRot = gsap.utils.random(-30, 30);

  const tl = gsap.timeline();
  tl.to(img, { scale: 1, rotation: gsap.utils.random(-15, 15), duration: 0.3, ease: "back.out(1.5)" })
    .to(img, {
      y: fallTargetY,
      rotation: finalRot,
      duration: 1.5,
      ease: "bounce.out" // Bouncy drop effect
    }, "+=0.1");
}
