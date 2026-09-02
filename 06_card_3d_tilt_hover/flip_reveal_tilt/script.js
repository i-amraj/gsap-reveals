const card = document.querySelector('.card');
const interactiveArea = document.querySelector('.interactive-area');

// If mouse is at far left (0), rotation is -180
// If mouse is at far right (window.innerWidth), rotation is 180
const maxFlip = 180;
// We also add a slight X rotation just for flavor
const maxTilt = 20; 

interactiveArea.addEventListener('mousemove', (e) => {
  // Normalize X from -1 (left edge) to 1 (right edge)
  const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  
  gsap.to(card, {
    rotationY: x * maxFlip,
    rotationX: -y * maxTilt,
    duration: 0.8,
    ease: "power2.out"
  });
});

interactiveArea.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)"
  });
});
