gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.getElementById('timeline-section');
const cards = gsap.utils.toArray('.card');
const markers = gsap.utils.toArray('.marker');
const progressBar = document.querySelector('.progress-bar');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

const trackTween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

// Main ScrollTrigger for pinning and track movement
const mainST = ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: trackTween,
  scrub: 1,
  invalidateOnRefresh: true,
  // Update progress bar scaleX based on total scroll progress
  onUpdate: (self) => {
    gsap.to(progressBar, { scaleX: self.progress, duration: 0.1, overwrite: true });
  }
});

// Individual Triggers for the Markers using containerAnimation
cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    containerAnimation: trackTween,
    start: "center center", // When the card hits exact center
    onEnter: () => markers[i].classList.add('active'),
    onLeaveBack: () => markers[i].classList.remove('active')
  });
});
