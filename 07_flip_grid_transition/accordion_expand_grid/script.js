gsap.registerPlugin(Flip);

const items = document.querySelectorAll('.grid-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    
    // 1. Get state of items AND their internal content (so the text scales smoothly)
    const state = Flip.getState(".grid-item, .content");

    // 2. Toggle class on clicked item
    const isExpanded = item.classList.contains('expanded');
    
    // Optional: close all others first
    items.forEach(i => i.classList.remove('expanded'));
    
    // If it wasn't already expanded, expand it
    if (!isExpanded) {
      item.classList.add('expanded');
    }

    // 3. Flip!
    Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      absolute: true, // Prevents layout snapping
      nested: true,   // Needed because we animated child elements (.content)
      scale: true     // Scales the container instead of animating width/height directly (smoother)
    });
  });
});
