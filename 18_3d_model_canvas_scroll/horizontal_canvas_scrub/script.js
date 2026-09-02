gsap.registerPlugin(ScrollTrigger);

// Horizontal Scroll Setup
const container = document.querySelector(".horizontal-container");

const horizontalTween = gsap.to(container, {
  x: () => -(container.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    pin: true,
    scrub: 1,
    end: () => "+=" + container.scrollWidth
  }
});

// Canvas Setup
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
  ctx.rect(-100, -100, 200, 200);
  ctx.fillStyle = `hsl(${prog * 360}, 80%, 50%)`;
  ctx.fill();
  
  ctx.restore();
}
render();

// We tie the canvas scrub to the SAME ScrollTrigger by referencing horizontalTween.scrollTrigger
// But let's only scrub when the canvas panel is visible!
// Actually, it's easier to create a containerTrigger (new in GSAP 3.8)
gsap.to(currentFrame, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".canvas-panel",
    containerAnimation: horizontalTween, // Crucial for horizontal triggering!
    start: "left center", // When left side of panel hits center of screen
    end: "right center", // When right side of panel hits center
    scrub: 1,
    onUpdate: render
  }
});
