gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");

const frameCount = 50;
const currentFrame = { frame: 0 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // Oscillating rectangle
  ctx.rotate(prog * Math.PI);
  ctx.fillStyle = "#ef4444";
  ctx.fillRect(-150, -50, 300, 100);
  
  ctx.restore();
}

render();

// We create a timeline that goes to frameCount and then back to 0
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".canvas-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=2000"
  }
});

// It takes 50% of the scroll distance to go forward...
tl.to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "power1.inOut", onUpdate: render })
  // ...and 50% to go back (yoyo)
  .to(currentFrame, { frame: 0, snap: "frame", ease: "power1.inOut", onUpdate: render });
