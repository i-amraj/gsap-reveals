const board = document.querySelector('.grid-board');
const maxRotation = 20; 

// Listen to the whole window so the grid moves no matter where the mouse is
window.addEventListener('mousemove', (e) => {
  // Normalize based on window width/height
  const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  
  gsap.to(board, {
    rotationY: x * maxRotation,
    rotationX: -y * maxRotation, // Negative to feel natural (move mouse up, board tilts up)
    duration: 0.8,
    ease: "power2.out"
  });
});

window.addEventListener('mouseleave', () => {
  gsap.to(board, {
    rotationY: 0,
    rotationX: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.4)"
  });
});
