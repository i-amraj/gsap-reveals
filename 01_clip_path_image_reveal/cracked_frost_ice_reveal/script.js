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

// Ice Shard Crack Particle Class
class IceShard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 40 + 50;
    this.growth = Math.random() * 2 + 1;
    this.opacity = 1.0;
    this.fade = 0.01;

    // Generate Jagged Ice Crystal Shard Vertices
    this.points = [];
    const numPoints = Math.floor(Math.random() * 4) + 5;
    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.PI * 2 / numPoints) * i;
      const r = this.radius * (0.6 + Math.random() * 0.8);
      this.points.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r
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

    // Draw Jagged Ice Shard Mask Polygon
    ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
    ctx.beginPath();
    this.points.forEach((p, i) => {
      const scale = this.radius / 50;
      if (i === 0) ctx.moveTo(p.x * scale, p.y * scale);
      else ctx.lineTo(p.x * scale, p.y * scale);
    });
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}

const shards = [];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
  if (dist > 30) {
    shards.push(new IceShard(e.clientX, e.clientY));
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

  for (let i = shards.length - 1; i >= 0; i--) {
    const s = shards[i];
    s.update();
    if (s.opacity <= 0) {
      shards.splice(i, 1);
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
