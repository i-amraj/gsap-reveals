const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let w, h;
const particles = [];
const numParticles = 100;
let mouse = { x: -1000, y: -1000 };

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Create particles
for (let i = 0; i < numParticles; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 1,
    vy: (Math.random() - 0.5) * 1,
    radius: Math.random() * 2 + 1,
    baseRadius: Math.random() * 2 + 1
  });
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener("mouseleave", () => {
  mouse.x = -1000;
  mouse.y = -1000;
});

function animate() {
  ctx.clearRect(0, 0, w, h);
  
  particles.forEach(p => {
    // Move
    p.x += p.vx;
    p.y += p.vy;
    
    // Bounce
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    
    // Interact with mouse
    const dx = mouse.x - p.x;
    const dy = mouse.y - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < 100) {
      // Repel
      p.x -= dx * 0.05;
      p.y -= dy * 0.05;
      p.radius = p.baseRadius * 2;
    } else {
      p.radius = p.baseRadius;
    }
    
    // Draw
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();
    
    // Connect lines to nearby particles
    particles.forEach(p2 => {
      const d = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
      if (d < 80) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255,255,255,${1 - d/80})`;
        ctx.stroke();
      }
    });
  });
  
  requestAnimationFrame(animate);
}

animate();

// Intro animation for text
gsap.from(".content", { opacity: 0, scale: 0.9, duration: 2, ease: "power2.out" });
