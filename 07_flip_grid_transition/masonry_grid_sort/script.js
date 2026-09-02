gsap.registerPlugin(Flip);

const container = document.getElementById('masonry');
const sortAscBtn = document.getElementById('sort-asc');
const sortDescBtn = document.getElementById('sort-desc');
const shuffleBtn = document.getElementById('shuffle');

// 1. Generate Items
const totalItems = 9;
const initialOrder = [6, 2, 8, 1, 9, 3, 5, 4, 7]; // Random starting layout
const heights = [150, 250, 180, 300, 220, 160, 280, 200, 260];

initialOrder.forEach(id => {
  const el = document.createElement('div');
  el.className = 'item';
  el.dataset.id = id;
  el.innerHTML = `<h2>${id}</h2>`;
  // Assign random heights based on index to create masonry look
  el.style.height = `${heights[id-1]}px`;
  container.appendChild(el);
});

// Helper function to animate the sorting
function doSort(sortFunction) {
  // A. Get current state
  const items = gsap.utils.toArray('.item');
  const state = Flip.getState(items);
  
  // B. Make DOM changes
  // Sort the DOM elements array
  items.sort(sortFunction);
  
  // Append them back to the container in the new order
  // (Appending an existing node moves it)
  items.forEach(item => container.appendChild(item));
  
  // C. Flip!
  Flip.from(state, {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true,
    stagger: 0.02
  });
}

// Event Listeners
sortAscBtn.addEventListener('click', () => {
  doSort((a, b) => parseInt(a.dataset.id) - parseInt(b.dataset.id));
});

sortDescBtn.addEventListener('click', () => {
  doSort((a, b) => parseInt(b.dataset.id) - parseInt(a.dataset.id));
});

shuffleBtn.addEventListener('click', () => {
  doSort(() => Math.random() - 0.5);
});
