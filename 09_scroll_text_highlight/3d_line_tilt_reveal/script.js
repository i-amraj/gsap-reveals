gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines' });

gsap.from(text.lines, {
  rotateX: -90, // Flipped up away from the viewer
  z: -200,      // Pushed back into the screen
  opacity: 0,
  stagger: 0.1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
