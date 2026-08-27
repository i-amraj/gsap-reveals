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

// Water Ripple Particle Class
class WaterRipple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.maxRadius = Math.random() * 120 + 100;
    this.growth = Math.random() * 3 + 2;
    this.opacity = 1.0;
    this.fade = 0.012;
  }

  update() {
    this.radius += this.growth;
    this.opacity -= this.fade;
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);

    // Concentric Liquid Ripple Gradient Rings
    const gradient = ctx.createRadialGradient(0, 0, this.radius * 0.2, 0, 0, this.radius);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity})`);
    gradient.addColorStop(0.7, `rgba(0, 0, 0, ${this.opacity * 0.8})`);
    gradient.addColorStop(0.9, `rgba(0, 0, 0, ${this.opacity * 0.4})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const ripples = [];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
  if (dist > 30) {
    ripples.push(new WaterRipple(e.clientX, e.clientY));
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

  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.update();
    if (r.opacity <= 0 || r.radius >= r.maxRadius) {
      ripples.splice(i, 1);
    } else {
      r.draw(maskCtx);
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
