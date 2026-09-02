gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById('multi-section');
const trackTop = document.querySelector('.track-top');
const trackBottom = document.querySelector('.track-bottom');

// Calculate distances
function getTopScrollAmount() {
  return -(trackTop.scrollWidth - window.innerWidth);
}

function getBottomScrollAmount() {
  // We want the bottom track to end up perfectly aligned on the left (x: 0)
  // So it must start at x: -(trackBottom.scrollWidth - window.innerWidth)
  return -(trackBottom.scrollWidth - window.innerWidth);
}

// Immediately set the bottom track's starting position so it's off-screen to the left
gsap.set(trackBottom, { x: getBottomScrollAmount });

// Timeline to control both
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${Math.abs(getTopScrollAmount())}`, // Use top track length as scroll duration
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true
  }
});

// Top track moves left
tl.to(trackTop, {
  x: getTopScrollAmount,
  ease: "none"
}, 0);

// Bottom track moves right (back to 0)
tl.to(trackBottom, {
  x: 0,
  ease: "none"
}, 0);
