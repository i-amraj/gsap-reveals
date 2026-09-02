gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  rotateX: 180, // Spin backwards 180 degrees
  y: 50,        // Start slightly below
  opacity: 0,
  duration: 1,
  ease: "back.out(1.5)", // Over-rotates slightly then settles
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
