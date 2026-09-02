gsap.registerPlugin(ScrollTrigger);

// Need words AND chars so the word wrapper can provide 3D perspective
const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  y: -200,      // Starts 200px above
  z: 200,       // Starts closer to the screen
  rotateX: 90,  // Rotated flat
  opacity: 0,
  stagger: 0.05,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
