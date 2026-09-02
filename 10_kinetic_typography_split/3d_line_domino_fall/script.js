gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines' });

gsap.from(text.lines, {
  rotateX: 90, // Tilted completely backwards (invisible)
  opacity: 0,
  duration: 1.5,
  ease: "bounce.out", // Falls and bounces on the hinge
  stagger: 0.15, // Slower stagger like falling dominoes
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
