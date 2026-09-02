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
  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.moveTo(0,-200);
  ctx.lineTo(150,100);
  ctx.lineTo(-150,100);
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

// Opacity 0 -> 1 (0 to 10%)
tl.to(canvas, { opacity: 1, duration: 0.1, ease: "none" }, 0)
  // Scrub frames 0 -> 100 (0 to 100%)
  .to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render, duration: 1 }, 0)
  // Opacity 1 -> 0 (90% to 100%)
  .to(canvas, { opacity: 0, duration: 0.1, ease: "none" }, 0.9);
