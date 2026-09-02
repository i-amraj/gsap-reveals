gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.querySelector('.horizontal-section');
const cards = gsap.utils.toArray('.card');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

const tween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1, // Smoothing helps the snap feel natural
  invalidateOnRefresh: true,
  
  // The magic snapping property
  // We have 5 cards. Progress goes from 0 to 1.
  // The snap points are: 0, 0.25, 0.5, 0.75, 1
  // 1 / (5 - 1) = 1 / 4 = 0.25 step size.
  snap: {
    snapTo: 1 / (cards.length - 1),
    duration: { min: 0.2, max: 0.6 }, // Animation length when snapping
    ease: "power1.inOut"
  }
});
