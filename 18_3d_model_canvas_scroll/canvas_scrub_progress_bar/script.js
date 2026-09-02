gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("scrub-canvas");
const ctx = canvas.getContext("2d");
const pBar = document.getElementById("p-bar");

const frameCount = 100;
const currentFrame = { frame: 0 };

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const prog = currentFrame.frame / frameCount;
  
  ctx.save();
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // A growing circle
  ctx.beginPath();
  ctx.arc(0, 0, prog * 300, 0, Math.PI*2);
  ctx.fillStyle = `hsla(${prog * 360}, 80%, 60%, 1)`;
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
    end: "+=1500",
    onUpdate: (self) => {
      // Tie the progress bar width to the scroll trigger's progress
      pBar.style.width = (self.progress * 100) + "%";
    }
  }
});

tl.to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render });
