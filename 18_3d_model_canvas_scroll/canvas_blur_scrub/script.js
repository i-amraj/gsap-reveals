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
  
  ctx.rotate(-prog * Math.PI * 2); // Rotate opposite direction
  
  // A glowing orb
  ctx.beginPath();
  ctx.arc(100, 0, 50, 0, Math.PI*2);
  ctx.fillStyle = "#38bdf8";
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(-100, 0, 50, 0, Math.PI*2);
  ctx.fillStyle = "#f43f5e";
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
  // Animate the CSS filter blur down to 0 at the middle of the scroll, then back up to 20px
  .to(canvas, { filter: "blur(0px)", duration: 0.5, ease: "power2.inOut" }, 0)
  .to(canvas, { filter: "blur(20px)", duration: 0.5, ease: "power2.inOut" }, 0.5);
