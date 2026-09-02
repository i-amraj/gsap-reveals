gsap.registerPlugin(ScrollTrigger);

// No SplitType needed! This is highly performant.
gsap.to('.split-text', {
  // Move the background from 100% (right) to 0% (left)
  // This drags the white half of the gradient across the text!
  backgroundPosition: "0% 0", 
  ease: "none",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
});
