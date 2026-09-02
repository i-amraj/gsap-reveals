const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const statusText = document.querySelector('.status');

const maxRotation = 25; 
let hasGyro = false;

// Attempt to use device orientation
window.addEventListener("deviceorientation", (e) => {
  // Check if we actually have data
  if (e.gamma !== null && e.beta !== null) {
    hasGyro = true;
    statusText.innerText = "Gyroscope Active!";
    
    // gamma is left/right (-90 to 90)
    // beta is front/back (-180 to 180)
    
    // Clamp values to our maxRotation
    let x = e.gamma;
    let y = e.beta;
    
    // Normalize slightly so the phone doesn't have to be perfectly flat
    // Subtract 45 from beta assuming user holds phone at a 45 degree angle
    y = y - 45;

    // Clamp
    if (x > maxRotation) x = maxRotation;
    if (x < -maxRotation) x = -maxRotation;
    if (y > maxRotation) y = maxRotation;
    if (y < -maxRotation) y = -maxRotation;

    gsap.to(card, {
      rotationY: x,
      rotationX: -y,
      duration: 0.3,
      ease: "power1.out"
    });
  }
});

// Fallback for Desktop
wrapper.addEventListener('mousemove', (e) => {
  if (hasGyro) return; // Don't fight the gyro
  statusText.innerText = "Mouse Active";

  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });
});

wrapper.addEventListener('mouseleave', () => {
  if (hasGyro) return;
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});
