gsap.registerPlugin(ScrollTrigger);

// 1. Split into lines
const text = new SplitType('.split-text', { types: 'lines' });

// 2. Animate lines sequentially
gsap.to(text.lines, {
  opacity: 1,
  stagger: 0.2, // Slightly larger stagger for whole lines
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 70%",
    end: "bottom 30%",
    scrub: true
  }
});
