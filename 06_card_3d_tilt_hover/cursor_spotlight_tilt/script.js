const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const spotlight = document.querySelector('.spotlight');

const maxRotation = 15; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  
  // For rotation (-1 to 1)
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  // For spotlight center (pixel coordinates within the card)
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Use GSAP to animate CSS variables for the gradient position
  gsap.to(spotlight, {
    '--x': `${mouseX}px`,
    '--y': `${mouseY}px`,
    duration: 0.1,
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
});
