gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

// Set them up initially off-screen at the bottom (except the first one)
gsap.set(panels.slice(1), { yPercent: 100 });

// Create a timeline that pins the container
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#panels-container",
    start: "top top",
    end: "+=300%", // 3 panels to scroll through
    pin: true,
    scrub: 1
  }
});

// Stagger the panels sliding up over the pinned container
tl.to(panels.slice(1), {
  yPercent: 0,
  ease: "none",
  stagger: 0.5
});
