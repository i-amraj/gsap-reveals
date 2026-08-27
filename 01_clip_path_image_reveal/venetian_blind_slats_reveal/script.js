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
  initSlats();
}

const slatHeight = 22;
let slats = [];

function initSlats() {
  slats = [];
  const totalSlats = Math.ceil(height / slatHeight) + 1;
  for (let i = 0; i < totalSlats; i++) {
    slats.push({
      y: i * slatHeight,
      openRatio: 0
    });
  }
}

resizeCanvases();
window.addEventListener("resize", resizeCanvases);

window.addEventListener("mousemove", (e) => {
  const my = e.clientY;

  slats.forEach(s => {
    const distY = Math.abs(s.y + slatHeight / 2 - my);
    if (distY < 140) {
      const open = 1.0 - distY / 140;
      s.openRatio = Math.max(s.openRatio, open);
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
  slats.forEach(s => {
    if (s.openRatio > 0.01) {
      s.openRatio *= 0.96; // Slat flip closing ease
      const activeH = slatHeight * s.openRatio;
      const startY = s.y + (slatHeight - activeH) / 2;
      maskCtx.fillRect(0, startY, width, activeH);
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
