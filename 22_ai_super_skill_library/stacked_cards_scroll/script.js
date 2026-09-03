gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".card");

cards.forEach((card, i) => {
  // If it's not the last card, animate it shrinking when the NEXT card scrolls up
  if (i !== cards.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      opacity: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 10vh", // When this card hits its sticky top
        end: "bottom top", // Until it scrolls out
        scrub: true,
      }
    });
  }
});
