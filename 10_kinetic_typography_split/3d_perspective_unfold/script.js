gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines, words' });

gsap.from(text.words, {
  rotateX: -90, // Flipped 90 degrees up (invisible)
  opacity: 0,
  duration: 0.8,
  stagger: 0.04, 
  ease: "power3.out", 
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
