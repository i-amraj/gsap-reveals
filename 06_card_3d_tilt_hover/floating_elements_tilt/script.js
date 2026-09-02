const wrappers = document.querySelectorAll('.card-wrapper');
const maxRotation = 20; // Slightly higher rotation to emphasize the depth

wrappers.forEach(wrapper => {
  const card = wrapper.querySelector('.card');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    // Tilt the main card. CSS translateZ on children handles the parallax automatically!
    gsap.to(card, {
      rotationY: x * maxRotation,
      rotationX: -y * maxRotation,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  wrapper.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  });
});
