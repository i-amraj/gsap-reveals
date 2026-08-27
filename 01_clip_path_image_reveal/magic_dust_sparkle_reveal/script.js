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

// Magic Dust Particle Class
class MagicParticle {
  constructor(x, y, vx, vy) {
    this.x = x + (Math.random() * 24 - 12);
    this.y = y + (Math.random() * 24 - 12);
    this.vx = vx * 0.2 + (Math.random() * 1.6 - 0.8);
    this.vy = vy * 0.2 + (Math.random() * 1.6 - 0.8);
    this.radius = Math.random() * 35 + 45;
    this.growth = Math.random() * 1.3 + 0.8;
    this.opacity = Math.random() * 0.4 + 0.6;
    this.fade = Math.random() * 0.009 + 0.006;
    this.rotation = Math.random() * Math.PI * 2;
    this.spin = (Math.random() * 0.06 - 0.03);
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

    // Glowing Magic Dust Radial Gradient Mask
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity})`);
    gradient.addColorStop(0.5, `rgba(0, 0, 0, ${this.opacity * 0.75})`);
    gradient.addColorStop(0.8, `rgba(0, 0, 0, ${this.opacity * 0.3})`);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const particles = [];
let lastX = 0;
let lastY = 0;

window.addEventListener("mousemove", (e) => {
  const vx = e.clientX - lastX;
  const vy = e.clientY - lastY;

  for (let i = 0; i < 3; i++) {
    particles.push(new MagicParticle(e.clientX, e.clientY, vx, vy));
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

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    if (p.opacity <= 0) {
      particles.splice(i, 1);
    } else {
      p.draw(maskCtx);
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
