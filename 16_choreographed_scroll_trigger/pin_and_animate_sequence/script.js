gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-section",
    pin: true,           // Pin the section
    scrub: 1,            // Link animation directly to scrollbar
    start: "top top",
    end: "+=2000",       // Keep it pinned for 2000px of scrolling
  }
});

// The sequence of animations that occurs WHILE the section is pinned
tl.to("#h-part1", { opacity: 1, y: 0, duration: 1 })
  .to("#h-part2", { opacity: 1, y: 0, duration: 1 })
  .to("#h-part3", { opacity: 1, y: 0, duration: 1 })
  // After all 3 are visible, pause briefly (using empty tween or offset)
  .to({}, { duration: 0.5 })
  // Then move them all out together
  .to(".headline", { y: -100, opacity: 0, duration: 1, stagger: 0.1 });
