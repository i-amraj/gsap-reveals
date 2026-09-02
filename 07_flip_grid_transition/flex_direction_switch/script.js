gsap.registerPlugin(Flip);

const container = document.getElementById('flexbox');
const toggleBtn = document.getElementById('toggle-flex');

toggleBtn.addEventListener('click', () => {
  // 1. Get State
  const state = Flip.getState('.child');
  
  // 2. DOM / CSS Change
  container.classList.toggle('column-mode');
  
  // 3. Flip!
  Flip.from(state, {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true, // Takes them out of flow so they don't break flex layout during transition
    scale: true     // Scales width/height smoothly since column-mode changes child dimensions
  });
});
