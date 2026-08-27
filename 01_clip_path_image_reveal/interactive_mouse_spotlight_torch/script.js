// Real Fluid Moving Smoke Canvas Composite Mask Engine

const mainCanvas = document.getElementById("smoke-canvas");
const mainCtx = mainCanvas.getContext("2d");
const targetImg = document.getElementById("target-img");

let width = (mainCanvas.width = window.innerWidth);
let height = (mainCanvas.height = window.innerHeight);

// 1. Offscreen Canvas for Smoke Mask Shapes
const maskCanvas = document.createElement("canvas");
const maskCtx = maskCanvas.getContext("2d");

// 2. Offscreen Canvas for Image Compositing
const imgCanvas = document.createElement("canvas");
const imgCtx = imgCanvas.getContext("2d");

function resizeCanvases() {
  width = mainCanvas.width = maskCanvas.width = imgCanvas.width = window.innerWidth;
  height = mainCanvas.height = maskCanvas.height = imgCanvas.height = window.innerHeight;
}
resizeCanvases();
window.addEventListener("resize", resizeCanvases);

// Smoke Cloud Particle Class
class SmokeParticle {
  constructor(x, y, vx, vy) {
    this.x = x + (Math.random() * 20 - 10);
    this.y = y + (Math.random() * 20 - 10);
    this.vx = vx * 0.25 + (Math.random() * 1.4 - 0.7);
    this.vy = vy * 0.25 - (Math.random() * 1.6 + 0.6); // Drifts upwards like real smoke
    this.radius = Math.random() * 40 + 60;            // Initial smoke puff size
    this.growthRate = Math.random() * 1.4 + 0.9;      // Smoke expands outward as it rises
    this.opacity = Math.random() * 0.3 + 0.7;         // Full initial visibility
    this.fadeRate = Math.random() * 0.007 + 0.005;    // Dissipation rate
    this.rotation = Math.random() * Math.PI * 2;
    this.spin = (Math.random() * 0.04 - 0.02);        // Swirl spin
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += this.growthRate;
    this.opacity -= this.fadeRate;
    this.rotation += this.spin;
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // Create Soft Radial Smoke Cloud Mask Texture
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
    gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity})`);
    gradient.addColorStop(0.5, `rgba(0, 0, 0, ${this.opacity * 0.7})`);
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
let mouseX = width / 2;
let mouseY = height / 2;
let lastMouseX = mouseX;
let lastMouseY = mouseY;

// Spawn Smoke Particles on Mouse Movement
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const vx = mouseX - lastMouseX;
  const vy = mouseY - lastMouseY;

  // Spawn 3 fluid smoke cloud particles per movement step
  for (let i = 0; i < 3; i++) {
    particles.push(new SmokeParticle(mouseX, mouseY, vx, vy));
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;
});

// Check Image Load Status
let isImgLoaded = false;
if (targetImg.complete) {
  isImgLoaded = true;
} else {
  targetImg.onload = () => (isImgLoaded = true);
}

// 60FPS Render Loop
function render() {
  // Step A: Clear Mask Canvas & Render Living Smoke Cloud Mask Shapes
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

  // Step B: Composite Top HD Image through the living Smoke Cloud Mask
  if (isImgLoaded) {
    imgCtx.clearRect(0, 0, width, height);
    
    // 1. Draw HD Image on offscreen image canvas
    imgCtx.drawImage(targetImg, 0, 0, width, height);
    
    // 2. Composite using 'destination-in' so HD Image is ONLY visible inside the living smoke clouds!
    imgCtx.globalCompositeOperation = "destination-in";
    imgCtx.drawImage(maskCanvas, 0, 0);
    imgCtx.globalCompositeOperation = "source-over";

    // Step C: Draw final masked HD Image Smoke Cloud Reveal onto main screen canvas!
    mainCtx.clearRect(0, 0, width, height);
    mainCtx.drawImage(imgCanvas, 0, 0);
  }

  requestAnimationFrame(render);
}

render();
