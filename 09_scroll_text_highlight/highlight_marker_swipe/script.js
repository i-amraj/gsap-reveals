gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.to(text.words, {
  backgroundColor: "#facc15", // Bright yellow highlighter
  color: "#0f172a",           // Dark text for contrast
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true
  }
});
