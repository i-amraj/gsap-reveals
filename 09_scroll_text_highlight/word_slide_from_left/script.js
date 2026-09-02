gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.from(text.words, {
  x: -50,
  opacity: 0,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
