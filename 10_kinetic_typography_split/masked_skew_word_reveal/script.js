gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines, words' });

gsap.from(text.words, {
  y: '120%', 
  skewY: 10,  // The word starts slanted
  opacity: 0, 
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse" 
  }
});
