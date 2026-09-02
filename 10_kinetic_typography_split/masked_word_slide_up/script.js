gsap.registerPlugin(ScrollTrigger);

// Split into lines (for masks) and words (to animate)
const text = new SplitType('.split-text', { types: 'lines, words' });

// We do NOT use scrub here, this triggers automatically once
gsap.from(text.words, {
  y: '120%', // Start completely below the line's bounding box
  opacity: 0, // Fade in slightly to smooth edges
  duration: 1,
  ease: "power4.out",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%", // Trigger when top of text hits 80% down viewport
    toggleActions: "play none none reverse" // Play on scroll down, reverse if scrolled way back up
  }
});
