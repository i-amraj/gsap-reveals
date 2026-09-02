gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  rotateY: 360, // Full horizontal spin
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
