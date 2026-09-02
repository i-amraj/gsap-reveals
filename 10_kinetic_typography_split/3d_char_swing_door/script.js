gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words, chars' });

gsap.from(text.chars, {
  rotateY: 90, // Flipped 90 degrees on Y axis (invisible edge-on)
  opacity: 0,
  duration: 0.8,
  stagger: 0.03, // Fast ripple
  ease: "power3.out", 
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
