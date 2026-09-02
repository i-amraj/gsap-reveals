gsap.registerPlugin(Flip);

const btns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    const filter = btn.getAttribute('data-filter');
    
    // 1. Get State
    const state = Flip.getState(items);
    
    // 2. DOM/CSS Change
    items.forEach(item => {
      if (filter === 'all' || item.dataset.type === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
    
    // 3. Flip with Choreography
    Flip.from(state, {
      duration: 0.8,
      ease: "power3.inOut",
      absolute: true,
      stagger: 0.08, // The magic sauce for choreography
      onEnter: elements => {
        // Elements entering the DOM
        gsap.fromTo(elements, 
          { opacity: 0, scale: 0.5, rotation: 90 }, 
          { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.2)", stagger: 0.08 }
        );
      },
      onLeave: elements => {
        // Elements leaving the DOM
        gsap.to(elements, { 
          opacity: 0, 
          scale: 0.5, 
          rotation: -90, 
          duration: 0.6, 
          ease: "power2.in", 
          stagger: 0.08 
        });
      }
    });
  });
});
