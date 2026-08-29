gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".scroll-track");
const cards = gsap.utils.toArray(".card");

// Initialize starting positions for cards 2-4
cards.forEach((card, i) => {
  if (i === 0) return;
  // Position bottom-right offscreen
  gsap.set(card, { xPercent: 120, yPercent: 120, rotation: 15 });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: track,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

cards.forEach((card, i) => {
  if (i === 0) return;
  
  tl.to(card, {
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    ease: "power2.out",
  });
});
