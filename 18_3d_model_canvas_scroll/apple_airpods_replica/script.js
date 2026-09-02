gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 200;
const currentFrame = { frame: 0 };

// Render a polished 3D-looking mockup (a rounded rectangle "case" that opens)
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // The scale changes based on progress
  let scale = 1 + (prog * 2);
  // It shrinks at the very end
  if (prog > 0.8) scale -= (prog - 0.8) * 5;
  ctx.scale(scale, scale);
  
  // Rotation
  ctx.rotate(prog * Math.PI);
  
  // Draw Case Base
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.roundRect(-100, 0, 200, 120, [0, 0, 40, 40]);
  ctx.fill();
  
  // Draw Lid (Opens based on progress)
  const lidOpenAngle = prog < 0.5 ? prog * Math.PI : Math.PI/2 - ((prog-0.5) * Math.PI);
  ctx.save();
  ctx.translate(-100, 0); // Hinge left
  ctx.rotate(-lidOpenAngle);
  ctx.fillStyle = "#f4f4f5";
  ctx.beginPath();
  ctx.roundRect(0, -60, 200, 60, [40, 40, 0, 0]);
  ctx.fill();
  ctx.restore();
  
  ctx.restore();
}
render();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".apple-section",
    pin: true,
    scrub: 1, // Smooth Apple-like scrubbing
    start: "top top",
    end: "+=5000" // Requires 5000px of scrolling for full detail
  }
});

// Animate frames 0-200 over 10 seconds of timeline time
tl.to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render, duration: 10 }, 0);

// Text 1: ANC
tl.fromTo("#txt-1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 1)
  .to("#txt-1", { opacity: 0, y: -50, duration: 1 }, 3);
  
// Text 2: Spatial
tl.fromTo("#txt-2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 4)
  .to("#txt-2", { opacity: 0, y: -50, duration: 1 }, 6);
  
// Text 3: MagSafe
tl.fromTo("#txt-3", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, 7.5)
  .to("#txt-3", { opacity: 0, scale: 1.2, duration: 1 }, 9);
