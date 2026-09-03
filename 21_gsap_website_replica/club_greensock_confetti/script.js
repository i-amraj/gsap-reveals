const btn = document.getElementById("join-btn");
const container = document.getElementById("confetti-container");
const colors = ["#88ce02", "#ff5f56", "#ffbd2e", "#27c93f", "#3b82f6", "#ec4899", "#fff"];

// Pre-create confetti DOM elements
const pieces = [];
for (let i = 0; i < 60; i++) {
  let div = document.createElement("div");
  div.classList.add("confetti-piece");
  div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  container.appendChild(div);
  pieces.push(div);
}

btn.addEventListener("click", () => {
  // Reset
  gsap.set(pieces, { x: 0, y: 0, opacity: 1, scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0 });
  
  // Animate: shoot up and scatter
  pieces.forEach(p => {
    // 1. Shoot up
    gsap.to(p, {
      y: -300 - Math.random() * 300,
      x: (Math.random() - 0.5) * 500,
      duration: 1 + Math.random(),
      ease: "power3.out"
    });
    
    // 2. Fall down
    gsap.to(p, {
      y: 600,
      duration: 2 + Math.random() * 2,
      ease: "power1.in",
      delay: 0.5 + Math.random() * 0.5,
      opacity: 0
    });
    
    // 3. Tumble (3D rotation)
    gsap.to(p, {
      rotationX: Math.random() * 720 - 360,
      rotationY: Math.random() * 720 - 360,
      rotationZ: Math.random() * 720 - 360,
      duration: 3 + Math.random(),
      ease: "none"
    });
  });
});
