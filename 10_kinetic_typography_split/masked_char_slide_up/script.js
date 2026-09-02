gsap.registerPlugin(ScrollTrigger);

// Split into words (masks) and chars (animated elements)
const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  y: '120%',
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
