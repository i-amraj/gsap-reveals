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

// Stagger reveal text inside each panel as it comes into view horizontally
panels.forEach((panel, i) => {
  const texts = panel.querySelectorAll(".stagger-text");
  
  // Calculate when this panel is roughly in the center
  const centerPos = i / panels.length;
  
  tl.to(texts, {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: 0,
    stagger: 0.1,
    ease: "power3.out",
    duration: 0.5
  }, (centerPos * track.scrollWidth / window.innerWidth) - 0.2); // Trigger slightly before it hits center
});
