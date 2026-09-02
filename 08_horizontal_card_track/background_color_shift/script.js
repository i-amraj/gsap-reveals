gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('color-section');
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
  const color = card.getAttribute('data-color');
  
  ScrollTrigger.create({
    trigger: card,
    containerAnimation: trackTween,
    start: "center 60%", // Triggers slightly before it hits perfect center
    end: "center 40%",
    
    // When scrolling down, changing to this card's color
    onEnter: () => gsap.to(section, { backgroundColor: color, duration: 0.8, overwrite: "auto" }),
    
    // When scrolling back up, changing to this card's color (the one before the next)
    onEnterBack: () => gsap.to(section, { backgroundColor: color, duration: 0.8, overwrite: "auto" })
  });
});
