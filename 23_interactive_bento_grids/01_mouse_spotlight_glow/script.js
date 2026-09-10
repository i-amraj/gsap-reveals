// Bento Grid 01: Dynamic Mouse Spotlight Glow with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".bento-card");
  const container = document.getElementById("cardsContainer");

  // Entrance choreography
  gsap.from(cards, {
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out"
  });

  // Track cursor coordinates across cards
  container.addEventListener("mousemove", (e) => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // Dynamic subtle 3D tilt on individual card hover
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.015,
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 1000
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
});
