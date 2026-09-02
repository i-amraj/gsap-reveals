gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".scroll-container");
const panels = gsap.utils.toArray(".horizontal-panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none", // important for consistent scroll speed
  scrollTrigger: {
    trigger: ".scroll-container",
    pin: true,
    scrub: 1, // smooth scrubbing
    snap: 1 / (panels.length - 1), // Optional: snap to each panel
    // The length of the scroll depends on how wide the container is
    end: () => "+=" + container.offsetWidth
  }
});
