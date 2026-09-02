gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines, words' });

gsap.from(text.words, {
  x: 50,       // Start slightly to the right
  y: '120%',   // Start below the line mask
  opacity: 0, 
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
