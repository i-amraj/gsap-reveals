gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.from(text.words, {
  // Start with the polygon squished entirely to the left edge
  clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", 
  opacity: 0,
  x: -20, // A slight slide from the left reinforces the wipe direction
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
