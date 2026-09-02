gsap.registerPlugin(ScrollTrigger);

// 1. Split into lines, and then words inside those lines
const text = new SplitType('.split-text', { types: 'lines, words' });

// 2. Animate the words moving UP from 100%
// Because the .line wrapper has overflow: hidden, they appear to slide out of nowhere
gsap.from(text.words, {
  y: "120%", // Start pushed down below the line
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1
  }
});
