// Module 23: Interactive Bento Grids Showcase Hub
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".demo-card");

  // Stagger entrance animation
  gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });

  // Hover micro-glow
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".card-num"), {
        color: "rgba(139, 92, 246, 0.4)",
        duration: 0.3
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector(".card-num"), {
        color: "rgba(255, 255, 255, 0.15)",
        duration: 0.3
      });
    });
  });
});
