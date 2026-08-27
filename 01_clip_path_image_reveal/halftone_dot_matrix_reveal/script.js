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
  initHalftoneGrid();
}

const spacing = 32;
let dots = [];

function initHalftoneGrid() {
  dots = [];
  const cols = Math.ceil(width / spacing) + 1;
  const rows = Math.ceil(height / spacing) + 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        x: c * spacing,
        y: r * spacing,
        radius: 0
      });
    }
  }
}

resizeCanvases();
window.addEventListener("resize", resizeCanvases);

window.addEventListener("mousemove", (e) => {
  const mx = e.clientX;
  const my = e.clientY;

  dots.forEach(d => {
    const dist = Math.hypot(d.x - mx, d.y - my);
    if (dist < 150) {
      const maxR = (1 - dist / 150) * 18;
      d.radius = Math.max(d.radius, maxR);
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

  maskCtx.fillStyle = "#000000";
  dots.forEach(d => {
    if (d.radius > 0.2) {
      d.radius *= 0.95; // Shrink fade
      maskCtx.beginPath();
      maskCtx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
      maskCtx.fill();
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
