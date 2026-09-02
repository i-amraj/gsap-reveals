gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  rotateX: -90, // Flipped flat backwards
  opacity: 0,
  duration: 0.8,
  stagger: 0.03, // Fast ripple
  ease: "back.out(1.7)", // The secret to the snappy mechanical feel
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
