gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines, words' });

gsap.from(text.words, {
  rotateX: -90, // Hidden flipped up
  opacity: 0,
  duration: 1.2,
  ease: "bounce.out", // Swings down and bounces
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
