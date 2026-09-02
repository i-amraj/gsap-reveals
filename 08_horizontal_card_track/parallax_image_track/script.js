gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector('.track');
const section = document.querySelector('.horizontal-section');
const parallaxImgs = gsap.utils.toArray('.parallax-img');

function getScrollAmount() {
  return -(track.scrollWidth - window.innerWidth);
}

// Use a timeline so we can animate multiple things concurrently
const tl = gsap.timeline();

// 1. Animate the track moving left
tl.to(track, {
  x: getScrollAmount,
  ease: "none"
});

// 2. Animate the inner images moving slightly left (-30%)
// Since the track moves left (e.g. -2000px), moving the images -30% relative to their own width
// creates a subtle offset that feels like a slower background layer.
// Wait, if the track moves left, items visually move left. To make the background look further away,
// it should move slower than the container. So as the container moves left, the image inside should move right slightly.
// So we want the image to start at 0, and move to -30% (if the image is wider).
// Wait, if image is 130% wide and starts at left:0, moving it to -30% pushes it left. 
// No, moving it to -30% makes it slide left relative to the container. Let's try xPercent: -20.
tl.to(parallaxImgs, {
  xPercent: -23, // 130% width means 30% extra. -23% keeps it from exposing the edge.
  ease: "none"
}, 0); // The '0' position parameter means start at the exact same time as the track tween

ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tl,
  scrub: 1,
  invalidateOnRefresh: true
});
