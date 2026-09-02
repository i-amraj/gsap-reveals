gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'chars' });

gsap.to(text.chars, {
  opacity: 1,
  // The magic is here: stagger them randomly instead of left-to-right
  stagger: {
    amount: 1, // Distribute the staggers over 1 second of total tween time
    from: "random"
  },
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
