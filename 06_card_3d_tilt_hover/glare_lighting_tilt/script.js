const wrappers = document.querySelectorAll('.card-wrapper');
const maxRotation = 18; // Max tilt angle

wrappers.forEach(wrapper => {
  const card = wrapper.querySelector('.card');
  const glare = wrapper.querySelector('.glare');

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    
    // Normalized position from -1 to 1 for Rotation
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    // Exact pixel position for Glare center mapping
    // We want the center of the 200% glare div to follow the mouse
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Tilt the card
    gsap.to(card, {
      rotationY: x * maxRotation,
      rotationX: -y * maxRotation,
      duration: 0.5,
      ease: "power2.out"
    });

    // Move the glare and show it
    // The glare is 200% width/height and positioned -50% top/left.
    // So mapping the mouse X/Y directly to x/y translation shifts it nicely.
    gsap.to(glare, {
      x: mouseX - (rect.width / 2),
      y: mouseY - (rect.height / 2),
      opacity: 1,
      duration: 0.2, // Faster than tilt for immediate light response
      ease: "power1.out"
    });
  });

  wrapper.addEventListener('mouseleave', () => {
    // Reset Card
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
    
    // Fade out glare
    gsap.to(glare, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});
