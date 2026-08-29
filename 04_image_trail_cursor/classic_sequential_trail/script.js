const container = document.querySelector(".trail-container");

// Array of images to cycle through
const images = [
  "../../assets/nature1.jpeg",
  "../../assets/nature2.jpeg",
  "../../assets/nature1.jpeg", // Using available assets
  "../../assets/nature2.jpeg"
];

let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 80; // Distance in px required to spawn next image

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  
  // Calculate distance from last spawn point
  const dist = Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y);
  
  if (dist > spawnThreshold) {
    spawnImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnImage(x, y) {
  // Create image element
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("trail-img");
  
  // Set initial position centering the image
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  
  // Append to container
  container.appendChild(img);
  
  // Increment and loop index
  currentIndex = (currentIndex + 1) % images.length;
  
  // GSAP Animation Timeline
  const tl = gsap.timeline({
    onComplete: () => {
      // Cleanup DOM after animation finishes
      img.remove();
    }
  });
  
  tl.to(img, {
    scale: 1, // Pop in
    duration: 0.4,
    ease: "back.out(1.5)"
  })
  .to(img, {
    scale: 0.5, // Shrink and fade out
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut"
  }, "+=0.4"); // Wait 0.4s before fading out
}
