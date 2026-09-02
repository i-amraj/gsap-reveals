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
  
  ctx.beginPath();
  ctx.moveTo(0, -100);
  ctx.lineTo(100, 100);
  ctx.lineTo(-100, 100);
  ctx.closePath();
  
  ctx.fillStyle = `hsl(${prog * 120 + 200}, 80%, 50%)`;
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

// Animate frame and scale (zoom in) simultaneously!
tl.to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render }, 0)
  .to(canvas, { scale: 3, ease: "power2.in" }, 0); // Scale up to 3x by the end
