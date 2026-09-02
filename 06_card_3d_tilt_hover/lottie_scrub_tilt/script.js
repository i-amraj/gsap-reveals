const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');
const player = document.querySelector('lottie-player');

const maxRotation = 25; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
  
  gsap.to(card, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation,
    duration: 0.3,
    ease: "power1.out"
  });

  // Map x (-1 to 1) to progress (0% to 100%)
  if (player && player.seek) {
    const progress = ((x + 1) / 2) * 100; // 0 to 100
    player.seek(`${progress}%`);
  }
});

wrapper.addEventListener('mouseleave', () => {
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.4)"
  });
  
  // Optionally reset lottie to 50% (middle) when resting
  if (player && player.seek) {
    player.seek("50%");
  }
});
