// Entrance animation
gsap.from('.bento-cell', {
  opacity: 0,
  y: 35,
  stagger: 0.08,
  duration: 0.6,
  ease: 'power3.out'
});

// Audio wave bar breathing
const bars = document.querySelectorAll('.wave-bar');
gsap.to(bars, {
  height: () => `${gsap.utils.random(20, 100)}%`,
  stagger: 0.1,
  duration: 0.4,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});
