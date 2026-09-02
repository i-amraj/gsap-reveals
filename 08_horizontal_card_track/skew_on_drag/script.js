gsap.registerPlugin(Draggable);

const track = document.getElementById('drag-track');
const cards = gsap.utils.toArray('.card');
const bounds = document.querySelector('.horizontal-wrapper');

// Custom velocity tracker since we aren't using the Inertia plugin here
let lastX = 0;
let velocity = 0;
let isDragging = false;
let clamp = gsap.utils.clamp(-30, 30); // Max 30 deg skew

Draggable.create(track, {
  type: "x",
  bounds: {
    minX: -(track.scrollWidth - window.innerWidth),
    maxX: 0
  },
  onPress: function() {
    lastX = this.x;
    isDragging = true;
  },
  onDrag: function() {
    // Calculate the difference between current X and last frame X
    const delta = this.x - lastX;
    
    // Scale delta slightly for a good feeling
    velocity = clamp(delta * -1.5); 
    
    // Animate cards skew
    gsap.to(cards, {
      skewX: velocity,
      duration: 0.1,
      overwrite: true
    });
    
    lastX = this.x;
  },
  onRelease: function() {
    isDragging = false;
    // Spring back to 0 when let go
    gsap.to(cards, {
      skewX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
      overwrite: true
    });
  }
});
