gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'lines' });

// We animate TO the expanded state, since it's currently squished in CSS
gsap.to(text.lines, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1.2,
  ease: "power3.inOut",
  stagger: 0.2, // Slower stagger for lines
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
