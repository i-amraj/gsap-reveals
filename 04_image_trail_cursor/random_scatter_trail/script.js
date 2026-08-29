const container = document.querySelector(".trail-container");

const images = [
  "../../assets/nature1.jpeg",
  "../../assets/nature2.jpeg"
];

let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 100; // Require a larger drag distance for scattering

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  const dist = Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y);
  
  if (dist > spawnThreshold) {
    spawnScatterImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnScatterImage(x, y) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("scatter-img");
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // Randomization for messy collage effect
  const randomRot = gsap.utils.random(-45, 45); // Random rotation between -45 and 45 deg
  const randomXOffset = gsap.utils.random(-30, 30);
  const randomYOffset = gsap.utils.random(-30, 30);

  // Set initial spawn state
  gsap.set(img, {
    x: x - 110 + randomXOffset, // Centering logic with random offset
    y: y - 140 + randomYOffset,
    rotation: randomRot,
    scale: 0,
    opacity: 1
  });
  
  // Animate pop-in then slow drop/fade out
  const tl = gsap.timeline({
    onComplete: () => img.remove()
  });
  
  tl.to(img, {
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.2)"
  })
  .to(img, {
    y: `+=100`, // Drop down slowly
    opacity: 0,
    duration: 1,
    ease: "power2.in"
  }, "+=0.3"); // Wait 0.3s before fading
}
