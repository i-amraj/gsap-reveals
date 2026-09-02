gsap.registerPlugin(ScrollTrigger);

// 1. Split the text into words using SplitType
const text = new SplitType('.split-text', { types: 'words' });

// 2. Animate the words using ScrollTrigger
gsap.to(text.words, {
  opacity: 1,
  stagger: 0.1, // Stagger is crucial to make them appear one by one
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",    // Animation starts when top of text hits 80% down the viewport
    end: "bottom 40%",   // Ends when bottom of text hits 40% down the viewport
    scrub: true,         // Syncs smoothly to scroll bar
    // markers: true     // Uncomment to debug scroll positions
  }
});
