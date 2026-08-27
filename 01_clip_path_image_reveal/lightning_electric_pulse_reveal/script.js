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

// Electric Pulse Arc Particle Class
class ElectricArc {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx * 0.3 + (Math.random() * 2 - 1);
    this.vy = vy * 0.3 + (Math.random() * 2 - 1);
    this.radius = Math.random() * 35 + 50;
    this.growth = Math.random() * 1.5 + 1.0;
    this.opacity = Math.random() * 0.4 + 0.6;
    this.fade = Math.random() * 0.012 + 0.008;

    // Jagged electric bolt branches
    this.branches = [];
    for (let i = 0; i < 4; i++) {
      const angle = Math.random() * Math.PI * 2;
      const len = Math.random() * 50 + 30;
      this.branches.push({
        x: Math.cos(angle) * len,
        y: Math.sin(angle) * len
      });
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += this.growth;
    this.opacity -= this.fade;
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);

    // Plasma Glowing Arc Mask Gradient
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity})`);
    gradient.addColorStop(0.6, `rgba(0, 0, 0, ${this.opacity * 0.7})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw Jagged Electric Bolt Branch Lines
    ctx.strokeStyle = `rgba(0, 0, 0, ${this.opacity * 0.8})`;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    this.branches.forEach(b => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(b.x * (this.radius / 50), b.y * (this.radius / 50));
      ctx.stroke();
    });

    ctx.restore();
  }
}

const arcs = [];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  const vx = e.clientX - lastX;
  const vy = e.clientY - lastY;

  for (let i = 0; i < 3; i++) {
    arcs.push(new ElectricArc(e.clientX, e.clientY, vx, vy));
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

  for (let i = arcs.length - 1; i >= 0; i--) {
    const a = arcs[i];
    a.update();
    if (a.opacity <= 0) {
      arcs.splice(i, 1);
    } else {
      a.draw(maskCtx);
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
