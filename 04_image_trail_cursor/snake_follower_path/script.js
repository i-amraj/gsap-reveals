const nodes = document.querySelectorAll(".snake-node");
const historyLength = nodes.length * 4; // Buffer length (points between nodes)
const pathHistory = []; // Array of {x, y}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let hasMoved = false;

// Initialize history with center pos
for (let i = 0; i < historyLength; i++) {
  pathHistory.push({ x: mouseX, y: mouseY });
}

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if(!hasMoved) {
    gsap.to(nodes, { scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(2)" });
    hasMoved = true;
  }
});

// Use GSAP ticker as requestAnimationFrame
gsap.ticker.add(() => {
  // Push new mouse position to front of history
  pathHistory.unshift({ x: mouseX, y: mouseY });
  // Remove oldest position
  pathHistory.pop();

  // Distribute nodes along the history array
  nodes.forEach((node, index) => {
    // Each node takes a point further back in history
    const historyIndex = index * 4; 
    const pos = pathHistory[historyIndex];
    
    // Scale nodes down towards the tail for visual effect
    const scale = 1 - (index * 0.05);

    // Instead of quickTo, we just set it since it's running every frame
    gsap.set(node, { x: pos.x, y: pos.y, scale: hasMoved ? scale : 0 });
  });
});
