gsap.registerPlugin(Flip);

const container = document.getElementById('grid');
const groupBtn = document.getElementById('group-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

// Generate initial scattered layout
const colors = ['red', 'blue', 'green'];
const itemsCount = 15;
let elementsArray = [];

for(let i=0; i<itemsCount; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  const color = colors[i % 3];
  box.dataset.color = color;
  // box.innerText = i + 1; // Optional ID
  elementsArray.push(box);
}

// Shuffle initial array
elementsArray.sort(() => Math.random() - 0.5);
elementsArray.forEach(el => container.appendChild(el));

// The Core Flip Function
function sortAndFlip(sortFunc) {
  // 1. Get State
  const boxes = gsap.utils.toArray('.box');
  const state = Flip.getState(boxes);
  
  // 2. DOM Change
  boxes.sort(sortFunc);
  boxes.forEach(box => container.appendChild(box));
  
  // 3. Flip
  Flip.from(state, {
    duration: 0.8,
    ease: "back.out(1.1)",
    absolute: true,
    stagger: 0.02,
    scale: true
  });
}

// Events
groupBtn.addEventListener('click', () => {
  sortAndFlip((a, b) => {
    // Sort alphabetically by color string (blue, green, red)
    if(a.dataset.color < b.dataset.color) return -1;
    if(a.dataset.color > b.dataset.color) return 1;
    return 0;
  });
});

shuffleBtn.addEventListener('click', () => {
  sortAndFlip(() => Math.random() - 0.5);
});
