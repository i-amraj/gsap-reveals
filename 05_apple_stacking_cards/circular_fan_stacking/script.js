gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".scroll-track");
const cards = gsap.utils.toArray(".card");

// Initialize starting positions for cards 2-4
cards.forEach((card, i) => {
  if (i === 0) return; // Base card stays put
  
  // Alternate sides: even indices swing from left (-90deg), odd from right (90deg)
  const isEven = i % 2 === 0;
  gsap.set(card, {
    rotation: isEven ? -60 : 60,
    xPercent: isEven ? -100 : 100,
    yPercent: 50 // Push down slightly so it swings up
  });
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
  
  // Bring to center (0 rotation, 0 x, 0 y)
  tl.to(card, {
    rotation: 0,
    xPercent: 0,
    yPercent: 0,
    ease: "power2.out",
  });
});
