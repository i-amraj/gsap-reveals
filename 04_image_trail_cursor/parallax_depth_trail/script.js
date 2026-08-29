const container = document.querySelector(".trail-container");

const images = [
  "../../assets/nature1.jpeg",
  "../../assets/nature2.jpeg"
];

let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 70; 

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  const dist = Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y);
  
  if (dist > spawnThreshold) {
    spawnParallaxImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnParallaxImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("parallax-img");
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // Randomize depth from -500 (far, small, blurred) to 200 (close, large, sharp)
  const zDepth = gsap.utils.random(-500, 200);
  
  // Calculate blur based on Z (if it's far away, blur it more)
  const blurAmt = zDepth < 0 ? Math.abs(zDepth) / 100 : 0;

  // Set initial position centered
  gsap.set(img, {
    x: x - 125,
    y: y - 175,
    z: zDepth, // CSS 3D translation
    filter: `blur(${blurAmt}px) brightness(${zDepth < 0 ? 0.6 : 1.1})`,
    opacity: 0,
    scale: 0.5
  });
  
  const tl = gsap.timeline({
    onComplete: () => img.remove()
  });
  
  tl.to(img, {
    scale: 1,
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  })
  .to(img, {
    y: `-=100`, // Float up slightly to simulate parallax movement
    opacity: 0,
    duration: 1.2,
    ease: "power1.inOut"
  }, "+=0.2");
}
