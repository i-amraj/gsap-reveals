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
  initHexGrid();
}

// Hexagon Grid Cell Structure
const hexRadius = 38;
const hexWidth = hexRadius * 2;
const hexHeight = Math.sqrt(3) * hexRadius;
let hexes = [];

function initHexGrid() {
  hexes = [];
  const cols = Math.ceil(width / (hexRadius * 1.5)) + 2;
  const rows = Math.ceil(height / hexHeight) + 2;

  for (let r = -1; r < rows; r++) {
    for (let c = -1; c < cols; c++) {
      const x = c * hexRadius * 1.5;
      const y = r * hexHeight + (c % 2 === 0 ? 0 : hexHeight / 2);
      hexes.push({ x, y, opacity: 0 });
    }
  }
}

resizeCanvases();
window.addEventListener("resize", resizeCanvases);

window.addEventListener("mousemove", (e) => {
  const mx = e.clientX;
  const my = e.clientY;

  hexes.forEach(h => {
    const dist = Math.hypot(h.x - mx, h.y - my);
    if (dist < 140) {
      h.opacity = Math.max(h.opacity, 1.0 - dist / 140);
    }
  });
});

function drawHexagon(ctx, x, y, radius, opacity) {
  if (opacity <= 0) return;
  ctx.save();
  ctx.translate(x, y);

  ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const hx = radius * Math.cos(angle);
    const hy = radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(hx, hy);
    else ctx.lineTo(hx, hy);
  }
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

let isImgLoaded = false;
if (targetImg.complete) {
  isImgLoaded = true;
} else {
  targetImg.onload = () => (isImgLoaded = true);
}

function render() {
  maskCtx.clearRect(0, 0, width, height);

  // Update & Draw Illuminated Hex Grid Cells
  hexes.forEach(h => {
    if (h.opacity > 0) {
      h.opacity -= 0.015; // Fade out rate
      drawHexagon(maskCtx, h.x, h.y, hexRadius - 2, h.opacity);
    }
  });

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
