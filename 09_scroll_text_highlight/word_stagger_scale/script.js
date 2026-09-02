gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

// Animate from scale 0.5 to 1
gsap.from(text.words, {
  opacity: 0,
  scale: 0.3,
  stagger: 0.1,
  ease: "back.out(1.7)", // Gives it a nice pop if scroll isn't scrubbed, but scrub handles easing
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1 // Adding a small scrub delay makes the scale pop feel more organic
  }
});
