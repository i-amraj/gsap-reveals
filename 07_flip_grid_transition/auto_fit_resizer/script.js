gsap.registerPlugin(Flip);

const container = document.getElementById('grid');
const btns = document.querySelectorAll('.resize-btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    // 1. Get State
    const state = Flip.getState(".item");
    
    // 2. DOM/CSS Change
    const newWidth = btn.getAttribute('data-width');
    container.style.width = newWidth;
    
    // 3. Flip!
    Flip.from(state, {
      duration: 0.8,
      ease: "power3.inOut",
      absolute: true, // Prevents layout snapping during the transition
      scale: true     // Scales the items as they morph to new widths smoothly
    });
  });
});
