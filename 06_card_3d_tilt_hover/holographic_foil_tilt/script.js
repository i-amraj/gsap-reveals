const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const foil = document.querySelector('.foil');

const maxRotation = 25; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
  
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Map mouse coordinates to background-position
  // x/y are -1 to 1. Map to 0% to 100%
  const bgX = (x + 1) * 50; 
  const bgY = (y + 1) * 50;
  
  gsap.to(foil, {
    backgroundPosition: `${bgX}% ${bgY}%`,
    duration: 0.1, // Faster update for snappy light reflection
    ease: "none"
  });
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
  
  gsap.to(foil, {
    backgroundPosition: "50% 50%",
    duration: 1,
    ease: "power2.out"
  });
});
