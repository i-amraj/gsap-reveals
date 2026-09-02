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
  ctx.rotate(prog * Math.PI * 4); // 2 full rotations
  
  ctx.beginPath();
  ctx.moveTo(0, -150);
  ctx.lineTo(150, 50);
  ctx.lineTo(-150, 50);
  ctx.closePath();
  ctx.fillStyle = `hsl(${prog * 100 + 200}, 80%, 50%)`;
  ctx.fill();
  
  ctx.restore();
}
render();

// The trigger is the entire split-section, but we don't pin it because CSS `position: sticky` handles the pinning!
gsap.to(currentFrame, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".split-section",
    start: "top top",
    end: "bottom bottom", // Scrubs for the entire height of the right text side
    scrub: 1,
    onUpdate: render
  }
});
