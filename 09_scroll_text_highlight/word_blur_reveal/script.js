gsap.registerPlugin(ScrollTrigger);

// 1. Split the text into words
const text = new SplitType('.split-text', { types: 'words' });

// 2. Animate the words (opacity + blur)
gsap.to(text.words, {
  opacity: 1,
  filter: "blur(0px)",
  stagger: 0.1, 
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",    
    end: "bottom 40%",   
    scrub: true
  }
});
