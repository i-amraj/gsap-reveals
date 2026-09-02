gsap.registerPlugin(Flip);

const availableBox = document.getElementById('available');
const selectedBox = document.getElementById('selected');
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    
    // 1. Get state of ALL tags
    // We capture all tags because removing/adding one affects the flow of all others
    const state = Flip.getState(tags);
    
    // 2. DOM Change
    // Determine which box it's in, and move it to the other
    if (tag.parentElement === availableBox) {
      selectedBox.appendChild(tag);
    } else {
      availableBox.appendChild(tag);
    }
    
    // Boost z-index during flight
    tag.style.zIndex = 100;

    // 3. Flip!
    Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      absolute: true, // Prevents sudden snapping
      scale: true,    // In case the flex sizing changes the item size
      onComplete: () => {
        tag.style.zIndex = 1;
      }
    });
  });
});
