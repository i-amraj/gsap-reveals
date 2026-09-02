gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const progress = document.getElementById("progress");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      // Sync progress bar width with scroll progress
      gsap.to(progress, { width: `${self.progress * 100}%`, duration: 0.1, ease: "none" });
    }
  }
});

tl.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none"
});
