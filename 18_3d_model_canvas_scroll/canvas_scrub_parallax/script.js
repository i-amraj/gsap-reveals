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
  
  // A simple pyramid
  ctx.beginPath();
  ctx.moveTo(0,-200);
  ctx.lineTo(200,100);
  ctx.lineTo(-200,100);
  ctx.closePath();
  ctx.fillStyle = `hsl(${prog * 50 + 200}, 80%, 50%)`;
  ctx.fill();
  
  ctx.restore();
}
render();

// We DO NOT pin here, we use scrub to animate y values (parallax) AND frame at the same time
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

tl.to(".parallax-bg", { y: "20%", ease: "none" }, 0) // BG moves slightly
  .to(canvas, { y: "-50%", ease: "none" }, 0) // Canvas moves moderately up
  .to(currentFrame, { frame: frameCount - 1, snap: "frame", ease: "none", onUpdate: render }, 0) // Canvas also scrubs
  .to(".parallax-fg", { y: "-150%", ease: "none" }, 0); // FG text moves very fast up
