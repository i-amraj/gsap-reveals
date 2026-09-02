gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('reveal-section');
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

// Inner Animations: Image Wipe Reveal
cards.forEach(card => {
  const imgContainer = card.querySelector('.img-container');
  const text = card.querySelector('h2');
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      containerAnimation: trackTween, // Link to horizontal track
      start: "left 95%", // Start wiping when card enters the viewport from the right
      end: "center center", // Finish wiping when it reaches the center
      scrub: 1
    }
  });
  
  // Wipes the inset from 100% right to 0% right (fully visible)
  tl.to(imgContainer, {
    clipPath: "inset(0 0% 0 0)",
    ease: "power2.inOut"
  })
  // Add a slight parallax/scale effect to the text inside as it reveals
  .from(text, {
    scale: 0.8,
    opacity: 0,
    x: -50,
    ease: "power2.out"
  }, "<0.2");
});
