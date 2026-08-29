const container = document.querySelector(".trail-container");

const images = [
  "../../assets/nature1.jpeg",
  "../../assets/nature2.jpeg"
];

let currentIndex = 0;
const gridSize = 150; // Must match CSS background-size
let lastCell = { col: -1, row: -1 };

window.addEventListener("mousemove", (e) => {
  // Determine which column and row the cursor is in
  const col = Math.floor(e.clientX / gridSize);
  const row = Math.floor(e.clientY / gridSize);
  
  // If we entered a new cell, spawn an image snapped to that cell
  if (col !== lastCell.col || row !== lastCell.row) {
    spawnGridImage(col, row);
    lastCell = { col, row };
  }
});

function spawnGridImage(col, row) {
  const img = document.createElement("img");
  img.src = images[currentIndex];
  img.classList.add("grid-img");
  
  // Calculate exact grid pixel coordinates (Top Left)
  const x = col * gridSize;
  const y = row * gridSize;
  
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  
  container.appendChild(img);
  currentIndex = (currentIndex + 1) % images.length;
  
  // GSAP Animation Pipeline
  const tl = gsap.timeline({
    onComplete: () => img.remove()
  });
  
  tl.to(img, {
    scale: 1, // Pop exactly into the grid block
    duration: 0.3,
    ease: "back.out(1.2)"
  })
  .to(img, {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    ease: "power2.inOut"
  }, "+=0.8"); // Hold on screen for 0.8s
}
