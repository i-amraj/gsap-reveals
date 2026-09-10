const cards = document.querySelectorAll('.card-3d');
const ring = document.getElementById('carouselRing');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const stepIndicator = document.getElementById('stepIndicator');

const totalCards = cards.length;
const angleStep = 360 / totalCards;
const radius = 320; // 320px circular radius

let currentIndex = 0;

// Position cards in a 3D circle
cards.forEach((card, i) => {
  const angle = i * angleStep;
  card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
});

function updateCarousel() {
  const targetRotation = -currentIndex * angleStep;
  ring.style.transform = `rotateY(${targetRotation}deg)`;
  
  // Normalize index for indicator
  const normIdx = ((currentIndex % totalCards) + totalCards) % totalCards;
  stepIndicator.textContent = `Node ${normIdx + 1} / ${totalCards}`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

// Arrow key navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    currentIndex--;
    updateCarousel();
  } else if (e.key === 'ArrowRight') {
    currentIndex++;
    updateCarousel();
  }
});
