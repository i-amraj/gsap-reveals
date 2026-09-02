gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('coverflow');
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
  // To create true cover flow, we create a timeline that goes from 
  // rotateY(60) -> rotateY(0) -> rotateY(-60) as it crosses the screen.
  
  // Set initial state before the card enters view
  gsap.set(card, {
    rotateY: 60,
    scale: 0.7,
    z: -200,
    opacity: 0.2
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween,
      start: "left 100%", // As soon as it enters from right
      end: "right 0%",    // Until it leaves on the left
      scrub: true
    }
  });

  // Animate to Center (Focus)
  tl.to(card, {
    rotateY: 0,
    scale: 1,
    z: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  })
  // Animate past Center (Exit Left)
  .to(card, {
    rotateY: -60,
    scale: 0.7,
    z: -200,
    opacity: 0.2,
    duration: 1,
    ease: "power2.inOut"
  });
});
