// Simple Canvas Ripple Simulation using GSAP to animate droplets
const canvas = document.getElementById("fluid-canvas");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const ripples = [];

window.addEventListener("mousemove", (e) => {
  // Create a new ripple object on mouse move
  const ripple = {
    x: e.clientX,
    y: e.clientY,
    radius: 10,
    opacity: 1
  };
  ripples.push(ripple);
  
  // Animate it expanding and fading
  gsap.to(ripple, {
    radius: 150,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    onComplete: () => {
      const index = ripples.indexOf(ripple);
      if(index > -1) ripples.splice(index, 1);
    }
  });
});

gsap.ticker.add(() => {
  ctx.clearRect(0, 0, width, height);
  
  ripples.forEach(r => {
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(136, 206, 2, ${r.opacity})`; // GSAP Green
    ctx.lineWidth = 2;
    ctx.stroke();
  });
});
