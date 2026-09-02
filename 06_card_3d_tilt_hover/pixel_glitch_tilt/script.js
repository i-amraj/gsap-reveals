const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const h2 = document.querySelector('.card-content h2');

const maxRotation = 25; 
const velocityThreshold = 100; // Pixels per frame to trigger glitch

let lastX = 0;
let lastY = 0;
let glitchTimer;

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  
  // Standard tilt math
  const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  gsap.to(card, {
    rotationY: normX * maxRotation,
    rotationX: -normY * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Calculate velocity
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const velocity = Math.sqrt(dx * dx + dy * dy);

  lastX = e.clientX;
  lastY = e.clientY;

  // Trigger glitch if moving too fast
  if (velocity > velocityThreshold) {
    card.classList.add('glitching');
    h2.innerText = "ERROR";
    
    // Clear old timer, set a new one to remove glitch shortly after stopping
    clearTimeout(glitchTimer);
    glitchTimer = setTimeout(() => {
      card.classList.remove('glitching');
      h2.innerText = "STABLE";
    }, 300);
  }
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
  card.classList.remove('glitching');
  h2.innerText = "STABLE";
});
