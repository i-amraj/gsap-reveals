gsap.registerPlugin(Flip);

const headers = document.querySelectorAll('.acc-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    
    // The parent item we clicked on
    const item = header.parentElement;
    
    // 1. Get state of ALL items and their bodies
    // We capture all items because opening one pushes the rest down
    const state = Flip.getState(".accordion-item, .acc-body");
    
    // 2. Make DOM changes
    const isActive = item.classList.contains('active');
    
    // Optional: Close all other accordions (makes it an exclusive accordion)
    document.querySelectorAll('.accordion-item').forEach(el => {
      el.classList.remove('active');
    });
    
    // If it wasn't active, open it
    if (!isActive) {
      item.classList.add('active');
    }
    
    // 3. Flip!
    Flip.from(state, {
      duration: 0.6,
      ease: "power3.inOut",
      absolute: true, // Animates smoothly instead of snapping layout
      nested: true,   // Needed because .acc-body (child) is changing size/display
      onEnter: elements => gsap.fromTo(elements, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, delay: 0.2 } // Fade in body content after slightly opening
      )
    });
    
  });
});
