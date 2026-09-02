gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'chars' });

gsap.from(text.chars, {
  opacity: 0,
  duration: 1.5,
  ease: "power2.inOut",
  // Completely randomizes the order in which characters animate
  stagger: {
    amount: 1,
    from: "random"
  },
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
