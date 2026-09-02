gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.to(text.words, {
  fontWeight: 900, // Animate to ultra-bold
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
