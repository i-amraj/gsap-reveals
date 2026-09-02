gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");

gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true
  }
});
