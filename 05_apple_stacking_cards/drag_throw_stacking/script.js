gsap.registerPlugin(Draggable);

const cards = gsap.utils.toArray(".card").reverse(); // Top card is first in array
let topCardIndex = 0;

function initDraggable() {
  if (topCardIndex >= cards.length) return; // Deck empty
  
  const currentCard = cards[topCardIndex];
  
  Draggable.create(currentCard, {
    type: "x,y",
    edgeResistance: 0.65,
    onDrag: function() {
      // Add slight rotation based on X movement
      gsap.to(this.target, { rotation: this.x * 0.05, duration: 0.1 });
    },
    onDragEnd: function() {
      // If thrown far enough
      if (Math.abs(this.x) > 150 || Math.abs(this.y) > 150) {
        // Throw it off screen
        const directionX = this.x > 0 ? 1 : -1;
        const directionY = this.y > 0 ? 1 : -1;
        
        gsap.to(this.target, {
          x: window.innerWidth * directionX,
          y: window.innerHeight * directionY,
          rotation: this.x * 0.2,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            this.target.remove(); // Remove thrown card
            this.kill(); // Kill this draggable instance
            
            topCardIndex++;
            animateDeckUp(); // Move the rest of the stack up
            initDraggable(); // Initialize draggable on the NEW top card
          }
        });
      } else {
        // Snap back to center
        gsap.to(this.target, { x: 0, y: 0, rotation: 0, duration: 0.4, ease: "back.out(1.5)" });
      }
    }
  });
}

function animateDeckUp() {
  // Animate remaining cards to their new positions
  for (let i = topCardIndex; i < cards.length; i++) {
    const card = cards[i];
    const offset = i - topCardIndex; // 0 for the new top card
    
    gsap.to(card, {
      z: -30 * offset,
      y: 20 * offset,
      scale: 1 - (offset * 0.05),
      filter: `brightness(${1 - (offset * 0.15)})`,
      duration: 0.4,
      ease: "power2.out"
    });
  }
}

// Start
initDraggable();
