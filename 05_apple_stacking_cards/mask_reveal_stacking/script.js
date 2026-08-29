gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".scroll-track");
const cards = gsap.utils.toArray(".card").slice(1); // Skip card 1, it's already visible

// We create a single timeline for the entire track
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: track,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

// Stagger the clip-path animations sequentially as user scrolls down
cards.forEach((card, i) => {
  tl.to(card, {
    clipPath: "circle(150% at 50% 50%)",
    ease: "none"
  });
});
