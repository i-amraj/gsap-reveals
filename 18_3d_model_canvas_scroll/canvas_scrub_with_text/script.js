gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 150;
const currentFrame = { frame: 0 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const angle = (currentFrame.frame / frameCount) * Math.PI * 4; // Two full rotations
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  const scale = 1.5 + Math.sin(angle/2) * 0.5;
  ctx.scale(scale, scale);
  
  for(let i=0; i<5; i++) {
    ctx.beginPath();
    ctx.arc(Math.cos(angle + i)*100, Math.sin(angle + i)*100, 40, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${(currentFrame.frame / frameCount) * 360 + (i*50)}, 80%, 60%, 0.8)`;
    ctx.fill();
  }
  ctx.restore();
}

render();

// We create a master timeline that controls the frame AND the text opacities simultaneously
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=3000" // 3000px of scrolling
  }
});

// Animate frames from 0 to 150 across the whole timeline
tl.to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render, duration: 10 }, 0);

// Insert text reveals at specific times within the 10-second timeline
tl.to("#text-1", { opacity: 1, duration: 1, yoyo: true, repeat: 1 }, 1); // appears at 10%, disappears at 30%
tl.to("#text-2", { opacity: 1, duration: 1, yoyo: true, repeat: 1 }, 4); // appears at 40%
tl.to("#text-3", { opacity: 1, duration: 1, yoyo: true, repeat: 1 }, 7); // appears at 70%
