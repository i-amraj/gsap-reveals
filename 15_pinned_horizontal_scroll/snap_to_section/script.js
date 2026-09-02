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
    invalidateOnRefresh: true,
    // Snap configuration
    snap: {
      snapTo: 1 / (panels.length - 1),
      duration: { min: 0.2, max: 0.6 },
      delay: 0.1,
      ease: "power1.inOut"
    }
  }
});
