gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('text-reveal-section');
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

// Inner Text Reveal Animation
cards.forEach(card => {
  const text = card.querySelector('.reveal-text');
  
  gsap.to(text, {
    y: "0%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween,
      start: "left 70%", // Start revealing when card is 70% into the screen
      end: "center center", // Fully revealed at center
      scrub: 1
    }
  });
});
