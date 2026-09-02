gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.from(text.words, {
  scale: 3,             // Starts massive
  filter: "blur(20px)", // Heavily blurred
  opacity: 0,
  stagger: 0.1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1 // Adding a tiny scrub delay (1 instead of true) adds weight to the slam
  }
});
