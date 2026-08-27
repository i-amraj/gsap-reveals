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

// Fire Ember Particle Class
class FireEmber {
  constructor(x, y, vx, vy) {
    this.x = x + (Math.random() * 24 - 12);
    this.y = y + (Math.random() * 24 - 12);
    this.vx = vx * 0.2 + (Math.random() * 2 - 1);
    this.vy = vy * 0.2 - (Math.random() * 2.5 + 1.2); // Rises fast like hot fire sparks
    this.radius = Math.random() * 30 + 40;
    this.growth = Math.random() * 1.5 + 1.0;
    this.opacity = Math.random() * 0.3 + 0.7;
    this.fade = Math.random() * 0.012 + 0.008;
    this.rotation = Math.random() * Math.PI * 2;
    this.spin = (Math.random() * 0.08 - 0.04);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += this.growth;
    this.opacity -= this.fade;
    this.rotation += this.spin;
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // Glowing Fiery Ember Radial Gradient Mask
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity})`);
    gradient.addColorStop(0.4, `rgba(0, 0, 0, ${this.opacity * 0.85})`);
    gradient.addColorStop(0.8, `rgba(0, 0, 0, ${this.opacity * 0.4})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const embers = [];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  const vx = e.clientX - lastX;
  const vy = e.clientY - lastY;

  for (let i = 0; i < 4; i++) {
    embers.push(new FireEmber(e.clientX, e.clientY, vx, vy));
  }

  lastX = e.clientX;
  lastY = e.clientY;
});

let isImgLoaded = false;
if (targetImg.complete) {
  isImgLoaded = true;
} else {
  targetImg.onload = () => (isImgLoaded = true);
}

function render() {
  maskCtx.clearRect(0, 0, width, height);

  for (let i = embers.length - 1; i >= 0; i--) {
    const e = embers[i];
    e.update();
    if (e.opacity <= 0) {
      embers.splice(i, 1);
    } else {
      e.draw(maskCtx);
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
