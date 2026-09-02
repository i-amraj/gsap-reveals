gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray('.card');
const section = document.getElementById('stack-container');

// We use a timeline linked to scroll
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "+=3000", // 3000px of scrolling
    pin: true,
    scrub: 1
  }
});

// Skip the first card since it's already in the center
for (let i = 1; i < cards.length; i++) {
  // Bring the current card in from the right
  tl.to(cards[i], {
    x: 0,
    ease: "power2.out"
  });
  
  // Simultaneously push all previous cards slightly to the left and scale them down
  tl.to(cards.slice(0, i), {
    x: (index, target) => {
      // Calculate how far left it should go based on its depth in the stack
      // The further back it is, the further left it goes.
      const depth = i - index; 
      return -(depth * 30); // 30px left per depth level
    },
    scale: (index, target) => {
      const depth = i - index;
      return 1 - (depth * 0.05); // Scale down 5% per depth level
    },
    ease: "power2.out"
  }, "<"); // The "<" positions this tween to start at the exact same time as the previous one
}
