gsap.registerPlugin(Flip);

const columns = [
  document.querySelector('#col-todo .column-content'),
  document.querySelector('#col-doing .column-content'),
  document.querySelector('#col-done .column-content')
];

const cards = document.querySelectorAll('.task-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    // Determine next column
    const currentContainer = card.parentElement;
    const currentIndex = columns.indexOf(currentContainer);
    const nextIndex = (currentIndex + 1) % columns.length; // Cycle back to 0
    const nextContainer = columns[nextIndex];
    
    // 1. Get state of ALL cards (because moving one affects siblings in both columns)
    const state = Flip.getState('.task-card');
    
    // 2. DOM Change: Move card to new parent
    nextContainer.appendChild(card);
    
    // Temporarily boost z-index so it flies over other columns
    card.style.zIndex = 100;
    
    // 3. Flip!
    Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      absolute: true, // Crucial for cross-container transitions
      scale: true,
      onComplete: () => {
        card.style.zIndex = 1; // reset
      }
    });
  });
});
