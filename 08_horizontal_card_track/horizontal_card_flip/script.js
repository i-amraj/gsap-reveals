gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('flip-section');
const cards = gsap.utils.toArray('.card');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

const trackTween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: trackTween,
  scrub: 1,
  invalidateOnRefresh: true
});

// Flip animation for each card
cards.forEach(card => {
  const inner = card.querySelector('.card-inner');
  
  gsap.to(inner, {
    rotateY: 0, // Flip to front
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween,
      start: "center 70%", // Starts flipping before center
      end: "center center", // Fully flipped at center
      scrub: true,
      yoyo: true, // Flips back over as it leaves
      repeat: 1
    }
  });
});
