gsap.registerPlugin(ScrollTrigger);

const text = new SplitType('.split-text', { types: 'words' });

gsap.to(text.words, {
  filter: "blur(0px)", // Snap into focus
  opacity: 1,          // Full opacity
  color: "#f8fafc",    // Bright white
  scale: 1.05,         // Slight pop
  ease: "sine.inOut",
  // The yoyo repeat makes them return to blur/opacity 0.2 after the wave passes
  stagger: {
    amount: 1, 
    yoyo: true, 
    repeat: 1 
  },
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
});
