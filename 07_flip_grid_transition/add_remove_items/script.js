gsap.registerPlugin(Flip);

const container = document.getElementById('grid');
const addBtn = document.getElementById('add-btn');
let itemCount = 3; // Starting items

// Add click listener to existing items
document.querySelectorAll('.item').forEach(addRemoveListener);

function addRemoveListener(el) {
  el.addEventListener('click', () => {
    // 1. Get state of all items currently in the grid
    const items = document.querySelectorAll('.item');
    const state = Flip.getState(items);
    
    // 2. Remove the clicked item from DOM
    el.remove();
    
    // 3. Flip! Use onLeave to fade out the removed item
    Flip.from(state, {
      duration: 0.6,
      ease: "power2.inOut",
      absolute: true, // Prevents layout shifting during animation
      onLeave: elements => gsap.to(elements, { 
        opacity: 0, 
        scale: 0.5, 
        duration: 0.4 
      })
    });
  });
}

addBtn.addEventListener('click', () => {
  // 1. Get state
  const items = document.querySelectorAll('.item');
  const state = Flip.getState(items);
  
  // 2. Add new item to DOM
  itemCount++;
  const newEl = document.createElement('div');
  newEl.className = 'item';
  newEl.innerHTML = `<h3>${itemCount}</h3>`;
  addRemoveListener(newEl);
  
  // Insert at random position for more chaotic visual, or just append
  // Random insertion:
  const randomChild = container.children[Math.floor(Math.random() * container.children.length)];
  if(randomChild) {
    container.insertBefore(newEl, randomChild);
  } else {
    container.appendChild(newEl);
  }

  // 3. Flip! Use onEnter to animate the new item in
  // We need to re-query items to include the new one in the Flip animation
  const newItems = document.querySelectorAll('.item');
  
  Flip.from(state, {
    targets: newItems, // explicitly tell it what to animate
    duration: 0.6,
    ease: "power2.inOut",
    absolute: true,
    onEnter: elements => gsap.fromTo(elements, 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 0.4, delay: 0.2, ease: "back.out(1.5)" }
    )
  });
});
