// 1. Infinite Marquee Loop
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// 2. Mouse tracker to move the clip-path
const revealLayer = document.querySelector('.reveal-layer');

window.addEventListener('mousemove', (e) => {
  // Update CSS variables used in the clip-path
  revealLayer.style.setProperty('--x', `${e.clientX}px`);
  revealLayer.style.setProperty('--y', `${e.clientY}px`);
});
