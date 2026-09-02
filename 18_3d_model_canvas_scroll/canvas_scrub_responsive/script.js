gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 100;
const currentFrame = { frame: 0 };

// Responsive resize logic
function resize() {
  // Use device pixel ratio for sharp rendering on retina displays
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  
  ctx.scale(dpr, dpr);
  render(); // Re-render immediately on resize
}
window.addEventListener("resize", resize);

function render() {
  // Clear needs to account for device pixel ratio scale if not reset
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform for clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  
  const prog = currentFrame.frame / frameCount;
  
  // Logical width/height after scaling
  const width = canvas.width / (window.devicePixelRatio || 1);
  const height = canvas.height / (window.devicePixelRatio || 1);
  
  ctx.save();
  ctx.translate(width/2, height/2);
  ctx.rotate(prog * Math.PI * 2);
  
  // Draw a responsive shape based on minimum dimension
  const size = Math.min(width, height) * 0.3;
  ctx.fillStyle = "#38bdf8";
  ctx.fillRect(-size/2, -size/2, size, size);
  
  ctx.restore();
}

resize(); // Initial sizing

gsap.to(currentFrame, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=2000"
  },
  onUpdate: render
});
