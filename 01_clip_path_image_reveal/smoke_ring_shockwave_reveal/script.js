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

// Shockwave Blast Ring Particle Class
class ShockwaveRing {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.maxRadius = Math.random() * 140 + 160;
    this.growth = Math.random() * 4 + 3;
    this.lineWidth = Math.random() * 40 + 35;
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

    ctx.strokeStyle = `rgba(0, 0, 0, ${this.opacity})`;
    ctx.lineWidth = this.lineWidth * (1 - this.radius / this.maxRadius);
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.stroke();

    // Solid inner core splash
    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.4})`;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius * 0.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const rings = [];
let lastX = 0;
let lastY = 0;

function spawnShockwave(x, y) {
  rings.push(new ShockwaveRing(x, y));
}

mainCanvas.addEventListener("click", (e) => spawnShockwave(e.clientX, e.clientY));

window.addEventListener("mousemove", (e) => {
  const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
  if (dist > 40) {
    spawnShockwave(e.clientX, e.clientY);
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

  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i];
    r.update();
    if (r.opacity <= 0 || r.radius >= r.maxRadius) {
      rings.splice(i, 1);
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
