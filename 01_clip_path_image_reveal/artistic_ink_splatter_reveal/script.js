const mainCanvas = document.getElementById("smoke-canvas");
const mainCtx = mainCanvas.getContext("2d");
const targetImg = document.getElementById("target-img");

let width = (mainCanvas.width = window.innerWidth);
let height = (mainCanvas.height = window.innerHeight);

const maskCanvas = document.createElement("canvas");
const maskCtx = maskCanvas.getContext("2d");

const imgCanvas = document.createElement("canvas");
const imgCtx = imgCanvas.getContext("2d");

function resizeCanvases() {
  width = mainCanvas.width = maskCanvas.width = imgCanvas.width = window.innerWidth;
  height = mainCanvas.height = maskCanvas.height = imgCanvas.height = window.innerHeight;
}
resizeCanvases();
window.addEventListener("resize", resizeCanvases);

// Ink Splatter Particle Class
class InkSplatter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 30 + 40;
    this.growth = Math.random() * 2 + 1;
    this.opacity = 1.0;
    this.fade = 0.01;
    
    // Sub-splatter droplet dots around main drop
    this.dots = [];
    const numDots = Math.floor(Math.random() * 6) + 4;
    for (let i = 0; i < numDots; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 45 + 30;
      this.dots.push({
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        r: Math.random() * 8 + 4
      });
    }
  }

  update() {
    this.radius += this.growth;
    this.opacity -= this.fade;
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);

    // Wet Watercolor Ink Bleed Mask
    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
    
    // Main Splatter Center Drop
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    // Surrounding Droplet Dots
    this.dots.forEach(dot => {
      ctx.beginPath();
      ctx.arc(dot.dx, dot.dy, dot.r * (this.radius / 50), 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }
}

const splatters = [];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
  if (dist > 25) {
    splatters.push(new InkSplatter(e.clientX, e.clientY));
    lastX = e.clientX;
    lastY = e.clientY;
  }
});

let isImgLoaded = false;
if (targetImg.complete) {
  isImgLoaded = true;
} else {
  targetImg.onload = () => (isImgLoaded = true);
}

function render() {
  maskCtx.clearRect(0, 0, width, height);

  for (let i = splatters.length - 1; i >= 0; i--) {
    const s = splatters[i];
    s.update();
    if (s.opacity <= 0) {
      splatters.splice(i, 1);
    } else {
      s.draw(maskCtx);
    }
  }

  if (isImgLoaded) {
    imgCtx.clearRect(0, 0, width, height);
    imgCtx.drawImage(targetImg, 0, 0, width, height);
    imgCtx.globalCompositeOperation = "destination-in";
    imgCtx.drawImage(maskCanvas, 0, 0);
    imgCtx.globalCompositeOperation = "source-over";

    mainCtx.clearRect(0, 0, width, height);
    mainCtx.drawImage(imgCanvas, 0, 0);
  }

  requestAnimationFrame(render);
}

render();
