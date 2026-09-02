gsap.registerPlugin(Flip);

const container = document.getElementById('grid');
const shuffleBtn = document.getElementById('shuffle-btn');

// Initial Setup
const totalItems = 12;
const classes = ['shape-1', 'shape-2', 'shape-3', 'shape-4'];

for(let i=0; i<totalItems; i++) {
  const el = document.createElement('div');
  el.className = 'item shape-1'; // Start all small
  el.innerHTML = i + 1;
  container.appendChild(el);
}

shuffleBtn.addEventListener('click', () => {
  const items = gsap.utils.toArray('.item');
  
  // 1. Get State
  const state = Flip.getState(items);
  
  // 2. Make DOM Changes
  // A. Randomize Size Classes
  items.forEach(item => {
    // Remove old shape class
    classes.forEach(c => item.classList.remove(c));
    // Add new random shape class (weighted to favor 1x1 so it doesn't break)
    const rand = Math.random();
    let newClass = 'shape-1';
    if(rand > 0.6) newClass = 'shape-2';
    if(rand > 0.8) newClass = 'shape-3';
    if(rand > 0.95) newClass = 'shape-4';
    item.classList.add(newClass);
  });
  
  // B. Shuffle DOM order
  items.sort(() => Math.random() - 0.5);
  items.forEach(item => container.appendChild(item)); // Re-append moves them
  
  // 3. Flip!
  Flip.from(state, {
    duration: 1,
    ease: "back.out(1.2)",
    absolute: true,
    scale: true, // MUST be true for size morphing
    stagger: 0.02
  });
});
