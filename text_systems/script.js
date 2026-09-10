const textSearch = document.getElementById('textSearch');
const cards = document.querySelectorAll('.text-module-card');

textSearch.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  cards.forEach(card => {
    const title = card.getAttribute('data-title') || '';
    const cat = card.getAttribute('data-category') || '';
    if (title.includes(q) || cat.includes(q)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.text-module-card', {
    opacity: 0,
    y: 35,
    stagger: 0.04,
    duration: 0.5,
    ease: 'power2.out'
  });
});
