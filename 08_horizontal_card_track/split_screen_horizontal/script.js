gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('split-section');
const cards = gsap.utils.toArray('.card');
const texts = gsap.utils.toArray('.text-item');

// We are only scrolling within the right panel (50vw wide on desktop, 100vw on mobile)
function getScrollAmount() {
  const panelWidth = window.innerWidth > 768 ? window.innerWidth / 2 : window.innerWidth;
  return -(track.scrollWidth - panelWidth);
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

let activeIndex = 0;

// Inner triggers to change the text
cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    containerAnimation: trackTween,
    start: "center 70%", // Triggers when the card hits the middle zone of the right panel
    end: "center 30%",
    
    onEnter: () => {
      // Hide old text
      gsap.to(texts[activeIndex], { opacity: 0, y: -30, duration: 0.3 });
      // Show new text
      activeIndex = i;
      gsap.fromTo(texts[i], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
    },
    
    onEnterBack: () => {
      gsap.to(texts[activeIndex], { opacity: 0, y: 30, duration: 0.3 });
      activeIndex = i;
      gsap.fromTo(texts[i], { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  });
});
