// Register the Flip plugin
gsap.registerPlugin(Flip);

const filterBtns = document.querySelectorAll('.filter-btn');
const gridItems = document.querySelectorAll('.grid-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Update active button state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterTarget = btn.getAttribute('data-filter');

    // 2. Capture the current state of ALL grid items before changing the DOM
    const state = Flip.getState(gridItems);

    // 3. Update the DOM (hide/show elements)
    gridItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filterTarget === 'all' || filterTarget === category) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    // 4. Animate the transition using Flip.from
    Flip.from(state, {
      duration: 0.6,
      ease: "power3.inOut",
      scale: true, // smoothly scale items as they resize
      absolute: true, // takes elements out of document flow during animation to prevent jumps
      stagger: 0.05,
      // onEnter runs for elements that were hidden but are now visible
      onEnter: elements => gsap.fromTo(elements, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" }
      ),
      // onLeave runs for elements that were visible but are now hidden
      onLeave: elements => gsap.to(elements, 
        { opacity: 0, scale: 0.8, duration: 0.4, ease: "power2.in" }
      )
    });
  });
});
