gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".gallery-track");

// Calculate how far to move the track to the left
function getScrollAmount() {
  let trackWidth = track.scrollWidth;
  return -(trackWidth - window.innerWidth);
}

const tween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

ScrollTrigger.create({
  trigger: ".gallery-container",
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true
});
