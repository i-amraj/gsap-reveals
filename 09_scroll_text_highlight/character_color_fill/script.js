gsap.registerPlugin(ScrollTrigger);

// 1. Split down to characters
const text = new SplitType('.split-text', { types: 'chars' });

// 2. Animate characters filling with color
gsap.to(text.chars, {
  color: "#fff", // Fills the transparent text stroke
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 75%",
    end: "bottom 25%",
    scrub: true
  }
});
