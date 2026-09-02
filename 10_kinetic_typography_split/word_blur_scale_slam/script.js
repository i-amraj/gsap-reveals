gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.from(text.words, {
  scale: 3,
  filter: "blur(10px)",
  opacity: 0,
  duration: 0.6, // Short duration
  ease: "expo.in", // Accelerates and hard stops
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
