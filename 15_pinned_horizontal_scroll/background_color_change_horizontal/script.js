gsap.registerPlugin(ScrollTrigger);

const track = document.getElementById("track");
const body = document.getElementById("bg-body");
const panels = gsap.utils.toArray(".panel");

const colors = ["#fef08a", "#60a5fa", "#f43f5e", "#0f172a"];

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: () => "+=" + track.scrollWidth,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      // Calculate which panel is currently taking up the majority of the screen
      const progress = self.progress;
      const index = Math.min(
        Math.floor(progress * panels.length),
        panels.length - 1
      );
      body.style.backgroundColor = colors[index];
    }
  }
});

tl.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth) + "px",
  ease: "none"
}, 0);
