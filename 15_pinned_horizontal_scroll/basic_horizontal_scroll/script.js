gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const panels = gsap.utils.toArray(".panel");

gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: "#pin-container",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true
  }
});
