gsap.registerPlugin(Observer);

const track = document.querySelector('.track');
let targetX = 0;
let currentX = 0;

// Update max scroll bound based on window size
function getMaxX() {
  return -(track.scrollWidth - window.innerWidth);
}

// Function to smoothly animate to the target position
function updatePosition() {
  // Clamp the targetX so we can't scroll past the ends
  targetX = gsap.utils.clamp(getMaxX(), 0, targetX);
  
  // Smoothly interpolate currentX towards targetX (lerp)
  // GSAP can also just tween it directly for ease
  gsap.to(track, {
    x: targetX,
    duration: 0.5,
    ease: "power2.out",
    overwrite: "auto"
  });
}

// Create the Observer to listen for all input types
Observer.create({
  target: window, // listen on the whole window
  type: "wheel,touch,pointer", // listen for mouse wheel, touch swipes, and click-and-drag
  wheelSpeed: -1,
  dragSpeed: 1, // Dragging moves the track naturally
  tolerance: 10,
  
  onChange: (self) => {
    // If it's a drag event on the X axis
    if (self.isDragging) {
      targetX += self.deltaX;
    } 
    // If it's a wheel event (usually vertical scroll on a mouse)
    else {
      // Map vertical wheel movement to horizontal track movement
      targetX += self.deltaY;
    }
    
    updatePosition();
  }
});

// Handle window resize
window.addEventListener("resize", updatePosition);
