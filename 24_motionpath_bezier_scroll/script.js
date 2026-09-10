// Module 24: MotionPath & Bezier 3D Splines Showcase Hub
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".demo-card");

  // Entrance stagger
  gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".card-num"), {
        color: "rgba(6, 182, 212, 0.4)",
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
