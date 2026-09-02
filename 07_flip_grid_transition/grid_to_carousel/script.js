gsap.registerPlugin(Flip);

const container = document.getElementById('media-container');
const toggleBtn = document.getElementById('toggle-view');
let isCarousel = false;

toggleBtn.addEventListener('click', () => {
  isCarousel = !isCarousel;
  toggleBtn.innerText = isCarousel ? "Switch to Grid View" : "Switch to Carousel View";
  
  // 1. Get State
  // We capture the cards and the container itself (so we can animate its overflow/padding changes)
  const state = Flip.getState(".card, .media-container");
  
  // 2. Make DOM Change
  container.classList.toggle('carousel-mode');
  
  // 3. Flip!
  Flip.from(state, {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true, // Required to stop items from pushing each other awkwardly during transition
    scale: true,    // Animate width changes smoothly via transform scale
    nested: true
  });
});
