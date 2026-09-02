gsap.registerPlugin(ScrollTrigger);

// 1. Split down to words and chars so words can act as 3D containers
const text = new SplitType('.split-text', { types: 'words, chars' });

// 2. Animate characters flipping in
gsap.from(text.chars, {
  rotateX: -90, // Flipped up 90 degrees (invisible)
  opacity: 0,
  stagger: 0.05,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".split-text",
    start: "top 80%",
    end: "bottom 30%",
    scrub: true
  }
});
