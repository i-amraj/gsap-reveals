gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

// Configuration for our mock image sequence
const frameCount = 100;
const currentFrame = { frame: 0 };

// Function to procedurally draw a frame (simulating a 3D rotating object)
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Calculate rotation based on frame (0 to 100 maps to 0 to 360 degrees)
  const angle = (currentFrame.frame / frameCount) * Math.PI * 2;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // Draw a 3D-ish looking structure that changes with the angle
  const scale = 1 + Math.sin(angle) * 0.2;
  ctx.scale(scale, scale);
  
  for(let i=0; i<8; i++) {
    ctx.rotate(angle + (i * Math.PI / 4));
    ctx.beginPath();
    ctx.rect(-100, -100, 200, 200);
    ctx.strokeStyle = `hsla(${(currentFrame.frame / frameCount) * 360 + (i*45)}, 80%, 60%, 0.5)`;
    ctx.lineWidth = 10;
    ctx.stroke();
  }
  
  ctx.restore();
  
  // Draw frame counter
  ctx.fillStyle = "white";
  ctx.font = "30px Inter";
  ctx.fillText(`Frame: ${Math.round(currentFrame.frame)} / ${frameCount}`, 20, 50);
}

// Initial render
render();

// The GSAP animation
gsap.to(currentFrame, {
  frame: frameCount - 1,
  snap: "frame", // Snap to whole numbers
  ease: "none",
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 0.5, // Slight smoothing
    start: "top top",
    end: "+=2000" // Requires 2000px of scrolling to complete
  },
  onUpdate: render // Re-render the canvas on every frame change
});
