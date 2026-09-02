gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.from(text.words, {
  letterSpacing: "30px", // Pulls characters inside the word apart
  filter: "blur(5px)",
  opacity: 0,
  duration: 1.2,
  ease: "power3.out", // Smooth pull-in
  stagger: 0.1, // Stagger word by word
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
