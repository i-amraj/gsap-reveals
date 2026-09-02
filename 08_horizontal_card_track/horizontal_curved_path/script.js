gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('arc-section');
const cards = gsap.utils.toArray('.card');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

// 1. The Main Horizontal Tween
const trackTween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

// 2. The Main ScrollTrigger that pins the section
ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: trackTween,
  scrub: 1,
  invalidateOnRefresh: true
});

// 3. The Inner Animations linked to the container's horizontal movement
cards.forEach(card => {
  // As the card moves across the screen horizontally, we animate its Y axis
  gsap.to(card, {
    y: -150, // Move it up 150px
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween, // The magic property!
      // Start the up motion when the card's left edge hits the right edge of the viewport
      start: "left right", 
      // End the up motion when the card's center hits the center of the viewport
      end: "center center",
      scrub: true,
      yoyo: true, // Go back down
      repeat: 1   // Repeat once (so it goes up, then down as it exits)
    }
  });
});
