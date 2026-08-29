const container = document.querySelector(".trail-container");
const images = ["../../assets/nature1.jpeg", "../../assets/nature2.jpeg"];
let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 100;

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  if (Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y) > spawnThreshold) {
    spawnShredderImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnShredderImage(x, y) {
  const sliceWrapper = document.createElement("div");
  sliceWrapper.classList.add("slice-container");
  sliceWrapper.style.left = `${x - 100}px`;
  sliceWrapper.style.top = `${y - 150}px`;
  
  const bgImage = images[currentIndex];
  
  // Create 4 slices
  for (let i = 1; i <= 4; i++) {
    const strip = document.createElement("div");
    strip.classList.add("slice-strip", `slice-${i}`);
    strip.style.backgroundImage = `url(${bgImage})`;
    sliceWrapper.appendChild(strip);
  }
  
  container.appendChild(sliceWrapper);
  currentIndex = (currentIndex + 1) % images.length;
  
  const strips = sliceWrapper.querySelectorAll(".slice-strip");
  const tl = gsap.timeline({ onComplete: () => sliceWrapper.remove() });
  
  // Pop in the full container
  tl.to(sliceWrapper, { scale: 1, rotation: gsap.utils.random(-15, 15), duration: 0.4, ease: "back.out(1.5)" })
  // Explode the individual strips
  .to(strips, {
    x: () => gsap.utils.random(-150, 150),
    y: () => gsap.utils.random(-50, 50),
    rotation: () => gsap.utils.random(-45, 45),
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  }, "+=0.3"); // Small delay before explode
}
