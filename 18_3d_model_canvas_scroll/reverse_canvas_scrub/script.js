gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 100;
// CRITICAL DIFFERENCE: We start the object at the LAST frame
const currentFrame = { frame: frameCount - 1 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw a spiral that unwinds (or winds up)
  const progress = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  ctx.beginPath();
  ctx.moveTo(0,0);
  for(let i=0; i<300 * progress; i++) {
    const angle = 0.1 * i;
    const x = (1 + angle) * Math.cos(angle);
    const y = (1 + angle) * Math.sin(angle);
    ctx.lineTo(x * 5, y * 5);
  }
  ctx.strokeStyle = `hsl(${progress * 360}, 100%, 50%)`;
  ctx.lineWidth = 10;
  ctx.stroke();
  
  ctx.restore();
  
  // Draw frame counter
  ctx.fillStyle = "white";
  ctx.font = "30px Inter";
  ctx.fillText(`Frame: ${Math.round(currentFrame.frame)} (Decreasing)`, 20, 50);
}

render();

// We animate TO frame 0
gsap.to(currentFrame, {
  frame: 0,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=1500"
  },
  onUpdate: render
});
