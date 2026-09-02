gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.to(text.words, {
  color: "#fff",
  textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #38bdf8, 0 0 80px #0284c7",
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true
  }
});
