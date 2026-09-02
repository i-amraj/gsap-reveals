gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('blur-section');
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

cards.forEach(card => {
  gsap.to(card, {
    opacity: 1,
    filter: "blur(0px)",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween,
      // Focus starts as it enters from the right
      start: "center 85%", 
      // Fully focused exactly at the center
      end: "center center",
      scrub: true,
      yoyo: true, // Reverses as it leaves the center
      repeat: 1
    }
  });
});
