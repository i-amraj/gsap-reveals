gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".overlap-card");

// We animate cards from index 1 to end, sliding them in from the right to left=0
// Then we scale down the previous card slightly.
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: "+=3000", // Total scrolling distance
  }
});

cards.forEach((card, i) => {
  if (i === 0) return; // First card is already in place
  
  // Bring the next card in from the right
  tl.to(card, {
    left: 0,
    ease: "none"
  });
  
  // Scale down the card beneath it to give a stacked effect
  tl.to(cards[i-1], {
    scale: 0.9,
    opacity: 0.6,
    ease: "none"
  }, "<"); // Run at the same time
});
