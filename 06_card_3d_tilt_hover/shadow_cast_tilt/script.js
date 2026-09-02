const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const shadow = document.querySelector('.floor-shadow');

const maxRotation = 20; 
const maxShadowShift = 60; // Pixels the shadow moves

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
  
  // Tilt the card
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Shift the shadow in the opposite direction
  // E.g., if card tilts left (x is negative), shadow should move right (positive x shift)
  gsap.to(shadow, {
    x: -x * maxShadowShift,
    y: -y * maxShadowShift,
    // Add dynamic stretching based on tilt severity
    scaleX: 1 + Math.abs(y * 0.1),
    scaleY: 1 + Math.abs(x * 0.1),
    opacity: 1 - (Math.abs(x) + Math.abs(y)) * 0.2, // Fades slightly when stretched far
    duration: 0.5,
    ease: "power2.out"
  });
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
  
  gsap.to(shadow, {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});
