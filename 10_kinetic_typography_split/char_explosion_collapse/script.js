gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'chars' });

gsap.from(text.chars, {
  // Generate a random starting position for every single character
  x: () => Math.random() * 600 - 300,
  y: () => Math.random() * 600 - 300,
  rotateZ: () => Math.random() * 180 - 90,
  filter: "blur(5px)",
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.5)",
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
