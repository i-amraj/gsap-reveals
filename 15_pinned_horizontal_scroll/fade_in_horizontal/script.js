gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const panels = gsap.utils.toArray(".panel");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true
  }
});

tl.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none"
}, 0);

// Fade in panels as they enter
panels.forEach((panel, i) => {
  if (i === 0) return; // First panel is already visible
  gsap.from(panel, {
    opacity: 0.1,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
      trigger: "#pin-wrap",
      start: () => `top -${(i * window.innerWidth) - (window.innerWidth / 2)}`,
      end: () => `top -${i * window.innerWidth}`,
      scrub: 1,
    }
  });
});
