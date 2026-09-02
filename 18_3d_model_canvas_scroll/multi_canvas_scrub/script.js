gsap.registerPlugin(ScrollTrigger);

const canvas1 = document.getElementById("canvas-1");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.getElementById("canvas-2");
const ctx2 = canvas2.getContext("2d");

const frameCount = 100;
const currentFrame = { frame: 0 };

function render() {
  const prog = currentFrame.frame / frameCount;
  
  // Render Canvas 1
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx1.save();
  ctx1.translate(canvas1.width/2, canvas1.height/2);
  ctx1.rotate(prog * Math.PI * 2);
  ctx1.fillStyle = "#3b82f6";
  ctx1.fillRect(-100, -100, 200, 200);
  ctx1.restore();

  // Render Canvas 2 (Rotates opposite way, different color/shape)
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.save();
  ctx2.translate(canvas2.width/2, canvas2.height/2);
  ctx2.rotate(-prog * Math.PI * 2);
  ctx2.beginPath();
  ctx2.arc(0, 0, 100, 0, Math.PI*2);
  ctx2.fillStyle = "#ec4899";
  ctx2.fill();
  ctx2.restore();
}

render();

gsap.to(currentFrame, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".multi-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=1500"
  },
  onUpdate: render
});
