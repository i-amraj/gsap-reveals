gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".scroll-track");
const cards = gsap.utils.toArray(".card").slice(1);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: track,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

cards.forEach((card, i) => {
  tl.to(card, {
    scale: 1,
    opacity: 1,
    ease: "power1.inOut"
  });
});
