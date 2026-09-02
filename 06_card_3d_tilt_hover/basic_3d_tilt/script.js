const wrappers = document.querySelectorAll('.card-wrapper');
const maxRotation = 15; // Max tilt angle

wrappers.forEach(wrapper => {
  const card = wrapper.querySelector('.card');

  wrapper.addEventListener('mousemove', (e) => {
    // Get wrapper dimensions and position
    const rect = wrapper.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    // x and y will be between -1 and 1
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    // Mouse moving right (x > 0) means rotationY should be positive
    // Mouse moving down (y > 0) means rotationX should be NEGATIVE (tilts back)
    gsap.to(card, {
      rotationY: x * maxRotation,
      rotationX: -y * maxRotation,
      duration: 0.5,
      ease: "power2.out" // Quick and snappy
    });
  });

  // Reset when mouse leaves
  wrapper.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)" // Gives it a nice spring back
    });
  });
});
