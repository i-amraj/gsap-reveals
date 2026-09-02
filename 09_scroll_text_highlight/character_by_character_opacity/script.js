gsap.registerPlugin(ScrollTrigger);

// 1. Split down to characters
const text = new SplitType('.split-text', { types: 'chars' });

// 2. Animate characters sequentially
gsap.to(text.chars, {
  opacity: 1,
  stagger: 0.05,
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 75%",
    end: "bottom 25%",
    scrub: true
  }
});
