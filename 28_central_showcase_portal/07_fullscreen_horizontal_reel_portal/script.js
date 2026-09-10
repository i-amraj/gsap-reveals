gsap.registerPlugin(Draggable);

const reelTrack = document.getElementById('reelTrack');
const progressBar = document.getElementById('progressBar');
const reelViewport = document.getElementById('reelViewport');

function calcBounds() {
  const trackWidth = reelTrack.scrollWidth;
  const viewWidth = window.innerWidth;
  return -(trackWidth - viewWidth + 100);
}

let minX = calcBounds();

window.addEventListener('resize', () => {
  minX = calcBounds();
  draggableInstance.applyBounds({ minX: minX, maxX: 0 });
});

const draggableInstance = Draggable.create(reelTrack, {
  type: 'x',
  bounds: { minX: minX, maxX: 0 },
  edgeResistance: 0.85,
  cursor: 'grab',
  activeCursor: 'grabbing',
  onDrag: updateProgress,
  onThrowUpdate: updateProgress
})[0];

function updateProgress() {
  const currentX = draggableInstance.x;
  const progress = Math.abs(currentX) / Math.abs(minX);
  progressBar.style.width = `${Math.min(100, Math.max(10, progress * 100))}%`;
}

// Mousewheel horizontal scroll
reelViewport.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY * 1.8;
  const newX = Math.min(0, Math.max(minX, draggableInstance.x - delta));

  gsap.to(reelTrack, {
    x: newX,
    duration: 0.35,
    ease: 'power1.out',
    onUpdate: () => {
      draggableInstance.update();
      updateProgress();
    }
  });
}, { passive: false });
