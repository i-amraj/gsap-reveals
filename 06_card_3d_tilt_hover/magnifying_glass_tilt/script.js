const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const lens = document.querySelector('.lens');
const lensImg = document.querySelector('.lens-img');

const maxRotation = 15; 
const zoomMultiplier = 2; // Matches our CSS 800x1000 vs 400x500

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  
  // Normalize for tilt
  const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  // Tilt the card
  gsap.to(card, {
    rotationY: normX * maxRotation,
    rotationX: -normY * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Local coordinates for the lens
  const localX = e.clientX - rect.left;
  const localY = e.clientY - rect.top;

  // Move lens to mouse (centered because of CSS transform translate(-50%, -50%))
  gsap.to(lens, {
    x: localX,
    y: localY,
    duration: 0.1,
    ease: "none"
  });

  // Move the zoomed image inside the lens in the OPPOSITE direction, multiplied by zoom
  // We need to offset by half the lens width (75px) so the mouse point is at the center of the zoom
  gsap.to(lensImg, {
    x: -localX * zoomMultiplier + 75,
    y: -localY * zoomMultiplier + 75,
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
