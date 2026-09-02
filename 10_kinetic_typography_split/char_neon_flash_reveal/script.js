gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'chars' });

gsap.fromTo(text.chars, {
  color: "#38bdf8", // Start cyan
  textShadow: "0 0 15px #38bdf8, 0 0 40px #38bdf8", // Heavy glow
  opacity: 0,
  y: 50
}, {
  color: "#ffffff", // Resolve to pure white
  textShadow: "0 0 0px #38bdf8, 0 0 0px #38bdf8", // Remove glow
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.03, // Ripple the glow through the text
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
