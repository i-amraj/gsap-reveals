const wrapper = document.querySelector('.cube-wrapper');
const cube = document.querySelector('.cube');

// Moderate rotation so we don't break the camera plane
const maxRotation = 35; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  gsap.to(cube, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(cube, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});
