const mainCanvas = document.getElementById("smoke-canvas");
const mainCtx = mainCanvas.getContext("2d");
const targetImg = document.getElementById("target-img");
const resetBtn = document.getElementById("reset-btn");

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

let isScratching = false;
let lastX = 0;
let lastY = 0;

// Scratch Line Styling
maskCtx.lineCap = "round";
maskCtx.lineJoin = "round";
maskCtx.lineWidth = 110;

function scratch(x, y) {
  maskCtx.beginPath();
  maskCtx.moveTo(lastX, lastY);
  maskCtx.lineTo(x, y);
  maskCtx.stroke();

  // Also draw a soft radial circle stroke at point
  const rad = maskCtx.lineWidth / 2;
  const grad = maskCtx.createRadialGradient(x, y, 0, x, y, rad);
  grad.addColorStop(0, "rgba(0,0,0,1)");
  grad.addColorStop(1, "rgba(0,0,0,0.5)");
  maskCtx.fillStyle = grad;
  maskCtx.beginPath();
  maskCtx.arc(x, y, rad, 0, Math.PI * 2);
  maskCtx.fill();
}

mainCanvas.addEventListener("mousedown", (e) => {
  isScratching = true;
  lastX = e.clientX;
  lastY = e.clientY;
  scratch(e.clientX, e.clientY);
  updateComposite();
});

mainCanvas.addEventListener("mousemove", (e) => {
  if (!isScratching) return;
  scratch(e.clientX, e.clientY);
  lastX = e.clientX;
  lastY = e.clientY;
  updateComposite();
});

window.addEventListener("mouseup", () => (isScratching = false));

// Reset Button clears the scratched canvas mask
resetBtn.addEventListener("click", () => {
  maskCtx.clearRect(0, 0, width, height);
  mainCtx.clearRect(0, 0, width, height);
});

let isImgLoaded = false;
if (targetImg.complete) {
  isImgLoaded = true;
} else {
  targetImg.onload = () => {
    isImgLoaded = true;
    updateComposite();
  };
}

function updateComposite() {
  if (!isImgLoaded) return;
  imgCtx.clearRect(0, 0, width, height);
  imgCtx.drawImage(targetImg, 0, 0, width, height);
  imgCtx.globalCompositeOperation = "destination-in";
  imgCtx.drawImage(maskCanvas, 0, 0);
  imgCtx.globalCompositeOperation = "source-over";

  mainCtx.clearRect(0, 0, width, height);
  mainCtx.drawImage(imgCanvas, 0, 0);
}
