gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.from(text.words, {
  opacity: 0,
  scale: 0.2, // Pop up from tiny size
  filter: "blur(10px)", // Optional blur
  stagger: {
    amount: 1,
    from: "center" // The magic property: staggers outwards from the middle item
  },
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
