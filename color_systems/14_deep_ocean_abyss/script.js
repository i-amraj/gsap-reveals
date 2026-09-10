document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.set-card', {
    opacity: 0,
    y: 30,
    stagger: 0.06,
    duration: 0.5,
    ease: 'power2.out'
  });
});
