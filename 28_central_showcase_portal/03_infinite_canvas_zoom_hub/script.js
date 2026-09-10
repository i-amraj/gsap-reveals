gsap.registerPlugin(Draggable);

const world = document.getElementById('world');
const viewport = document.getElementById('viewport');
const zoomLevel = document.getElementById('zoomLevel');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const zoomReset = document.getElementById('zoomReset');

let currentScale = 1;
let currentX = -300;
let currentY = -200;

function updateTransform(animate = false) {
  zoomLevel.textContent = `${Math.round(currentScale * 100)}%`;
  
  if (animate) {
    gsap.to(world, {
      x: currentX,
      y: currentY,
      scale: currentScale,
      duration: 0.4,
      ease: 'power2.out'
    });
  } else {
    gsap.set(world, {
      x: currentX,
      y: currentY,
      scale: currentScale
    });
  }
}

// Initial positioning
updateTransform();

// Drag to Pan
const dragInstance = Draggable.create(world, {
  type: 'x,y',
  edgeResistance: 0.8,
  cursor: 'grab',
  activeCursor: 'grabbing',
  onDrag: function () {
    currentX = this.x;
    currentY = this.y;
  }
})[0];

// Wheel to Zoom
viewport.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY * -0.0015;
  const newScale = Math.min(Math.max(0.4, currentScale + delta), 2.2);

  // Zoom towards mouse position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  currentX = mouseX - (mouseX - currentX) * (newScale / currentScale);
  currentY = mouseY - (mouseY - currentY) * (newScale / currentScale);
  currentScale = newScale;

  updateTransform();
  dragInstance.update();
}, { passive: false });

// Zoom Button Controls
zoomIn.addEventListener('click', () => {
  currentScale = Math.min(currentScale + 0.25, 2.2);
  updateTransform(true);
});

zoomOut.addEventListener('click', () => {
  currentScale = Math.max(currentScale - 0.25, 0.4);
  updateTransform(true);
});

zoomReset.addEventListener('click', () => {
  currentScale = 1;
  currentX = -300;
  currentY = -200;
  updateTransform(true);
});

// Click Card to Open Module
document.querySelectorAll('.canvas-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.location.href = url;
  });
});
