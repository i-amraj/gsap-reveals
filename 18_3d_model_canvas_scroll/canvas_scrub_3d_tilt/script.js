gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 100;
const currentFrame = { frame: 0 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(prog * Math.PI * 2);
  
  // Draw a grid pattern
  ctx.strokeStyle = "#a855f7";
  ctx.lineWidth = 5;
  for(let i=-200; i<=200; i+=40) {
    ctx.beginPath();
    ctx.moveTo(-200, i);
    ctx.lineTo(200, i);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i, -200);
    ctx.lineTo(i, 200);
    ctx.stroke();
  }
  
  ctx.restore();
}
render();

// Initial state of canvas element
gsap.set(canvas, { rotationX: 45, rotationY: -45, scale: 0.5 });

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
  // Animate the actual DOM element's 3D rotation simultaneously with the canvas internal rotation
  .to(canvas, { rotationX: 0, rotationY: 0, scale: 1, ease: "power1.inOut" }, 0);
