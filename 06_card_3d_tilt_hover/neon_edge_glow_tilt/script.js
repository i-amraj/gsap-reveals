const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');

const maxRotation = 20; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
  
  // Tilt
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Calculate dynamic inset shadow for the rim light
  // If x is positive (mouse right), shadow should come from the right (-x)
  // We use cyan/blue colors for the neon feel
  const shadowX = x * -40; // Negative because inset pushes inward
  const shadowY = y * -40;
  
  gsap.to(card, {
    boxShadow: `inset ${shadowX}px ${shadowY}px 60px rgba(6, 182, 212, 0.8), 0 30px 60px rgba(0,0,0,0.8)`,
    duration: 0.2, // Fast update for light
    ease: "none"
  });
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    boxShadow: `inset 0px 0px 0px rgba(6, 182, 212, 0), 0 30px 60px rgba(0,0,0,0.8)`,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});
