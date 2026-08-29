const container = document.querySelector(".trail-container");

const images = [
  "../../assets/nature1.jpeg",
  "../../assets/nature2.jpeg"
];

let currentIndex = 0;
let lastPos = { x: 0, y: 0 };
const spawnThreshold = 60; // Distance before spawning next orbiter

window.addEventListener("mousemove", (e) => {
  const currentPos = { x: e.clientX, y: e.clientY };
  const dist = Math.hypot(currentPos.x - lastPos.x, currentPos.y - lastPos.y);
  
  if (dist > spawnThreshold) {
    spawnOrbitImage(currentPos.x, currentPos.y);
    lastPos = currentPos;
  }
});

function spawnOrbitImage(x, y) {
  // Create the pivot container
  const pivot = document.createElement("div");
  pivot.classList.add("orbit-pivot");
  pivot.style.left = `${x}px`;
  pivot.style.top = `${y}px`;
  
  // Create the actual image
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("orbit-img");
  
  pivot.appendChild(img);
  container.appendChild(pivot);
  
  currentIndex = (currentIndex + 1) % images.length;
  
  // Animate the image pop-in and fade out
  gsap.to(img, {
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.5)"
  });
  
  gsap.to(img, {
    scale: 0.2,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.inOut"
  });

  // Animate the pivot container to rotate 360 degrees (creating the orbit)
  gsap.to(pivot, {
    rotation: 360,
    duration: 1.6,
    ease: "power1.inOut",
    onComplete: () => {
      pivot.remove(); // Cleanup DOM
    }
  });
}
