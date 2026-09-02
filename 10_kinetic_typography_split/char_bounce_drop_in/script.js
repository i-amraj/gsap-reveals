gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  y: -150, // Start 150px above
  opacity: 0,
  duration: 1.5, // Needs longer duration for the bounce to resolve cleanly
  ease: "bounce.out", // The bounce ease does the heavy lifting
  stagger: 0.04,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
