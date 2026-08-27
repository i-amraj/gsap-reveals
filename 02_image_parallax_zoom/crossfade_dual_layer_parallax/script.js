gsap.registerPlugin(ScrollTrigger);

const baseLayer = document.querySelector(".layer-base");
const topLayer = document.querySelector(".layer-top");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".cross-pin",
    start: "top top",
    end: "+=1800",
    scrub: 1,
    pin: true
  }
});

// Base Layer moves UP
tl.to(baseLayer, {
  yPercent: -20,
  ease: "none"
}, 0);

// Top Layer moves DOWN while crossfading opacity to 1
tl.to(topLayer, {
  yPercent: 20,
  opacity: 1,
  ease: "none"
}, 0);
