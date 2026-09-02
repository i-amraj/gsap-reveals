gsap.registerPlugin(Flip);

const toggleBtn = document.getElementById('toggle-view');
const container = document.querySelector('.content-container');
const items = document.querySelectorAll('.item');

let isListView = false;

toggleBtn.addEventListener('click', () => {
  isListView = !isListView;
  
  // Update button text
  toggleBtn.innerText = isListView ? "Switch to Grid View ⊞" : "Switch to List View ☷";

  // 1. Get the current state of the elements we want to animate
  // In this case, we capture the items, AND their child elements (image, info) 
  // so that the children also animate their size/flex-direction changes smoothly.
  const state = Flip.getState(".item, .img-placeholder, .info");

  // 2. Make the DOM change
  container.classList.toggle('list-view');

  // 3. Flip!
  Flip.from(state, {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true, // Prevents layout jumping during animation
    nested: true, // Required because we are flipping parent (.item) AND children
  });
});
