const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const video = document.querySelector('.bg-video');

const maxRotation = 15; 
const maxVideoShift = 30; // Max pixels to shift the video

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
  
  // Tilt the card
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.5,
    ease: "power2.out"
  });

  // Shift the video in the OPPOSITE direction of the mouse
  gsap.to(video, {
    x: -x * maxVideoShift,
    y: -y * maxVideoShift,
    duration: 0.5,
    ease: "power2.out"
  });
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
  
  gsap.to(video, {
    x: 0,
    y: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
});
