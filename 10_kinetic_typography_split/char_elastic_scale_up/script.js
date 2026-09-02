gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  scale: 0,
  opacity: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.4)", // Pop up past 1 and wobble
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
