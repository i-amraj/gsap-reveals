gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 12; // Very low frame count
const currentFrame = { frame: 0 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // It will snap to 12 distinct rotations
  ctx.rotate(prog * Math.PI * 2);
  
  ctx.fillStyle = "#d97706";
  // Draw a star shape to make rotation obvious
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(Math.cos( (18+i*72)/180*Math.PI ) * 200, -Math.sin( (18+i*72)/180*Math.PI ) * 200);
    ctx.lineTo(Math.cos( (54+i*72)/180*Math.PI ) * 80, -Math.sin( (54+i*72)/180*Math.PI ) * 80);
  }
  ctx.closePath();
  ctx.fill();
  
  ctx.restore();
}

render();

// Using stepped ease creates a stop-motion or segmented rotation effect
gsap.to(currentFrame, {
  frame: frameCount - 1,
  ease: `steps(${frameCount - 1})`, // The secret sauce for stepping
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: true, // true (0) means strict scrubbing with no lag smoothing
    start: "top top",
    end: "+=1500"
  },
  onUpdate: render
});
