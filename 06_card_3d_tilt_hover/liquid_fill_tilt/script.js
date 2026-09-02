const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const liquidContainer = document.querySelector('.liquid-container');

const maxRotation = 25; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  // Tilt the card
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Counter-rotate the liquid so it stays level
  // If card tilts right (rotationY positive), liquid must rotate left (negative) in 2D space
  // We use a slight multiplier to make it slosh aggressively
  gsap.to(liquidContainer, {
    rotation: -x * (maxRotation * 1.5), 
    y: y * 10, // Slosh up/down slightly
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
  
  gsap.to(liquidContainer, {
    rotation: 0,
    y: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});
