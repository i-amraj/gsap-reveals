gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'chars' });

// Animate TO the fully expanded polygon
gsap.to(text.chars, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.03,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
