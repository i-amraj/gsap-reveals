gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('focus-section');
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

// Animate each card using containerAnimation
cards.forEach(card => {
  gsap.to(card, {
    scale: 1,
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween,
      // Start scaling up when the card's center hits the 80% mark of the viewport (from the right)
      start: "center 80%", 
      // Finish scaling up when the card's center hits the center of the viewport
      end: "center center",
      scrub: true,
      yoyo: true, // Go back to scale 0.7 when it moves past center
      repeat: 1
    }
  });
});
