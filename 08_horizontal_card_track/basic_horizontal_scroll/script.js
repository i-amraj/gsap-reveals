gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.querySelector('.horizontal-section');

// We need a function to calculate the total scroll distance based on the track width
function getScrollAmount() {
  const trackWidth = track.scrollWidth;
  // Subtract the viewport width so the last item ends up on the right edge (or we can just let it scroll fully)
  return -(trackWidth - window.innerWidth);
}

const tween = gsap.to(track, {
  x: getScrollAmount,
  ease: "none"
});

ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`, // The scroll distance equals the pixel width of the track translation
  pin: true,
  animation: tween,
  scrub: 1, // 1 second smoothing
  invalidateOnRefresh: true // Recalculates getScrollAmount if user resizes window
});
