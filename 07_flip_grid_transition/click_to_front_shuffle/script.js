gsap.registerPlugin(Flip);

const container = document.querySelector('.grid-container');
const items = document.querySelectorAll('.grid-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    
    // 1. Get the initial state of ALL items
    // We must capture all items because moving one affects the position of all others in the grid
    const state = Flip.getState(items);
    
    // 2. Make DOM change: Move clicked item to the front of the container
    container.prepend(item);
    
    // 3. Flip from the previous state
    Flip.from(state, {
      duration: 0.6,
      ease: "back.out(1.2)",
      absolute: true, // Animates them out of flow so they don't snap abruptly
      zIndex: 10, // Ensure the moving item stays on top
      scale: true
    });
  });
});
