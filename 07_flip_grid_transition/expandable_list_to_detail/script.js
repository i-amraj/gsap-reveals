gsap.registerPlugin(Flip);

const container = document.getElementById('list');
const rows = document.querySelectorAll('.list-row');

rows.forEach(row => {
  row.addEventListener('click', () => {
    
    // 1. Get State of all rows and their inner content
    const state = Flip.getState(".list-row, .color-tag, .content");
    
    // 2. DOM/CSS Change
    const isDetailMode = container.classList.contains('detail-mode');
    
    if (isDetailMode) {
      // Closing
      container.classList.remove('detail-mode');
      row.classList.remove('active');
    } else {
      // Opening
      container.classList.add('detail-mode');
      row.classList.add('active');
    }
    
    // 3. Flip!
    Flip.from(state, {
      duration: 0.7,
      ease: "power3.inOut",
      absolute: true, // Needed because rows are disappearing (display: none)
      nested: true,   // Because color-tag and content internal dimensions change
      onLeave: elements => gsap.to(elements, { opacity: 0, duration: 0.3 }), // Fade out inactive rows
      onEnter: elements => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.3 }) // Fade them back in on close
    });
  });
});
