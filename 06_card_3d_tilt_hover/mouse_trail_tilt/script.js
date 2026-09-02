const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const maxRotation = 20;

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  
  // Normalized tilt
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  // Exact pixel coords inside card
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Spawn Particle
  createParticle(mouseX, mouseY);
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});

let lastTime = 0;
function createParticle(x, y) {
  // Throttle particle creation slightly to save DOM performance
  const now = Date.now();
  if (now - lastTime < 20) return; 
  lastTime = now;

  const p = document.createElement('div');
  p.classList.add('particle');
  
  // Center particle exactly on mouse
  p.style.left = `${x - 5}px`;
  p.style.top = `${y - 5}px`;
  
  card.appendChild(p);

  // Animate and remove
  gsap.to(p, {
    y: "+=30", // fall down slightly
    scale: 0.1,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => {
      p.remove();
    }
  });
}
