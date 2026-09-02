gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  z: -500,           // Start deep in the background
  scale: 0.5,        // Start smaller
  filter: "blur(10px)", // Out of focus
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
