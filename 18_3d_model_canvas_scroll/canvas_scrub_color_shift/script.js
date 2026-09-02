gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 100;
const currentFrame = { frame: 0 };

// Render a STATIC color object. We will shift its hue using CSS!
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(prog * Math.PI * 2);
  
  ctx.beginPath();
  ctx.moveTo(0, -150);
  ctx.lineTo(150, 150);
  ctx.lineTo(-150, 150);
  ctx.closePath();
  // It is ALWAYS red
  ctx.fillStyle = "red";
  ctx.fill();
  
  ctx.restore();
}

render();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=2000"
  }
});

tl.to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render }, 0)
  // Shift the hue by 360 degrees over the course of the rotation
  .to(canvas, { filter: "hue-rotate(360deg)", ease: "none" }, 0);
