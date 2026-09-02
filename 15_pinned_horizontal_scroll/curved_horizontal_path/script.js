gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const circles = gsap.utils.toArray(".circle");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true
  }
});

// Horizontal movement
tl.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none"
}, 0);

// Vertical sine wave curve calculation
// We calculate a y offset for each circle based on its progress through the timeline
circles.forEach((circle, i) => {
  tl.to(circle, {
    y: (i % 2 === 0) ? -150 : 150, // Alternate up and down
    ease: "sine.inOut",
    yoyo: true,
    repeat: 1
  }, (i * 0.15)); // Stagger the animation slightly
});
