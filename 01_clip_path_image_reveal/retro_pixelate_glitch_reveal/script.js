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
  initPixelGrid();
}

const blockSize = 28;
let pixelBlocks = [];

function initPixelGrid() {
  pixelBlocks = [];
  const cols = Math.ceil(width / blockSize) + 1;
  const rows = Math.ceil(height / blockSize) + 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      pixelBlocks.push({
        x: c * blockSize,
        y: r * blockSize,
        opacity: 0
      });
    }
  }
}

resizeCanvases();
window.addEventListener("resize", resizeCanvases);

window.addEventListener("mousemove", (e) => {
  const mx = e.clientX;
  const my = e.clientY;

  pixelBlocks.forEach(b => {
    const dist = Math.hypot(b.x + blockSize / 2 - mx, b.y + blockSize / 2 - my);
    if (dist < 130) {
      b.opacity = Math.max(b.opacity, 1.0 - dist / 130);
    }
  });
});

let isImgLoaded = false;
if (targetImg.complete) {
  isImgLoaded = true;
} else {
  targetImg.onload = () => (isImgLoaded = true);
}

function render() {
  maskCtx.clearRect(0, 0, width, height);

  pixelBlocks.forEach(b => {
    if (b.opacity > 0) {
      b.opacity -= 0.018; // Glitch block fade rate
      maskCtx.fillStyle = `rgba(0, 0, 0, ${b.opacity})`;
      // Add subtle random glitch pixel jitter
      const shiftX = Math.random() < 0.1 ? (Math.random() * 6 - 3) : 0;
      maskCtx.fillRect(b.x + shiftX, b.y, blockSize - 1, blockSize - 1);
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
