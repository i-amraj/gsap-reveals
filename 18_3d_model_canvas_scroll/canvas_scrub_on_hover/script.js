const container = document.getElementById("hover-container");
const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 60;
const currentFrame = { frame: 0 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // Create a 3D looking sphere effect
  ctx.rotate(prog * Math.PI * 2);
  
  for(let i=0; i<10; i++) {
    ctx.beginPath();
    ctx.ellipse(0, 0, 200, 50 + (i*15), 0, 0, Math.PI*2);
    ctx.strokeStyle = `hsla(${180 + (i*10)}, 80%, 60%, 0.5)`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  
  ctx.restore();
}
render();

// Map mouse X position to frames
container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const mouseX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  const progress = mouseX / rect.width; // 0 to 1
  
  const targetFrame = Math.round(progress * (frameCount - 1));
  
  // Use GSAP to animate to the target frame smoothly
  gsap.to(currentFrame, {
    frame: targetFrame,
    duration: 0.5,
    ease: "power2.out",
    onUpdate: render
  });
});

// Reset when mouse leaves
container.addEventListener("mouseleave", () => {
  gsap.to(currentFrame, {
    frame: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    onUpdate: render
  });
});
