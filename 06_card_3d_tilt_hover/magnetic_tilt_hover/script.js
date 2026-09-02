const wrappers = document.querySelectorAll('.card-wrapper');
const maxRotation = 15;
const maxPull = 20; // How many pixels the card pulls towards the cursor

wrappers.forEach(wrapper => {
  const card = wrapper.querySelector('.card');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    // Magnetic Pull + Tilt
    gsap.to(card, {
      rotationY: x * maxRotation,
      rotationX: -y * maxRotation,
      x: x * maxPull, // Translate X towards mouse
      y: y * maxPull, // Translate Y towards mouse
      duration: 0.4,
      ease: "power2.out"
    });
  });

  wrapper.addEventListener('mouseleave', () => {
    // Reset all transforms with a satisfying bounce
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  });
});
