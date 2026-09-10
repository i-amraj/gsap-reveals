// Module 27 Master Hub Staggered Entrance Animations
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.demo-card');

  // Entrance timeline
  gsap.timeline()
    .from('.hub-header', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.stat-box', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .from(cards, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.3');

  // Micro-interaction hover sound simulation on card previews
  cards.forEach(card => {
    const bars = card.querySelectorAll('.mini-bars span');
    if (bars.length > 0) {
      card.addEventListener('mouseenter', () => {
        gsap.to(bars, {
          height: () => `${gsap.utils.random(20, 100)}%`,
          stagger: 0.05,
          duration: 0.2,
          repeat: 3,
          yoyo: true
        });
      });
    }

    const switchThumb = card.querySelector('.mini-switch-thumb');
    if (switchThumb) {
      card.addEventListener('mouseenter', () => {
        gsap.to(switchThumb, {
          x: 0,
          duration: 0.2,
          yoyo: true,
          repeat: 1
        });
      });
    }
  });
});
