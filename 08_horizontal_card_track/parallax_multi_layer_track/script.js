gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById('parallax-section');
const midLayer = document.querySelector('.mid-layer');
const bgLayer = document.querySelector('.bg-layer');
const fgLayer = document.querySelector('.fg-layer');

function getScrollAmount() {
  return -(midLayer.scrollWidth - window.innerWidth);
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true
  }
});

const baseScroll = getScrollAmount();

// The normal speed middle track
tl.to(midLayer, {
  x: baseScroll,
  ease: "none"
}, 0);

// The slow background layer (moves 50% as far)
tl.to(bgLayer, {
  x: baseScroll * 0.5,
  ease: "none"
}, 0);

// The fast foreground layer (moves 150% as far)
tl.to(fgLayer, {
  x: baseScroll * 1.5,
  ease: "none"
}, 0);
