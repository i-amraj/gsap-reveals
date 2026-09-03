// Glitch requires rapid, randomized CSS clip-path inset updates
const text = document.querySelector(".glitch-text");

function createGlitch() {
  const tl = gsap.timeline({
    onComplete: () => {
      // Random delay before next glitch
      gsap.delayedCall(Math.random() * 2 + 1, createGlitch);
    }
  });

  // Random number of glitch slices
  const slices = Math.floor(Math.random() * 5) + 3;
  
  for(let i=0; i<slices; i++) {
    // Generate random inset bounds (top, right, bottom, left)
    const t = Math.random() * 100;
    const b = 100 - (t + Math.random() * 20); // Keep slices thin
    
    tl.set(text, {
      css: {
        // We use CSS Custom properties to target the pseudo elements, 
        // OR we can just use CSSRulePlugin. For simplicity, we can skew the main element.
        // But for true RGB split glitch, we skew the main and let CSS text-shadow do the rest.
      }
    });
    
    tl.to(text, {
      x: (Math.random() - 0.5) * 20,
      skewX: (Math.random() - 0.5) * 20,
      duration: 0.05,
      ease: "none"
    });
  }
  
  // Snap back to normal
  tl.to(text, { x: 0, skewX: 0, duration: 0.05 });
}

// Start glitching
createGlitch();
