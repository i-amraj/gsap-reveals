// Bento Grid 02: Card-to-Modal Expand with GSAP Flip
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Flip);

  const cards = document.querySelectorAll(".card");
  const backdrop = document.getElementById("backdrop");
  const closeBtn = document.getElementById("closeBtn");
  let activeCard = null;

  // Stagger entrance
  gsap.from(cards, {
    scale: 0.92,
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
  });

  // Card click handler
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (activeCard || card.classList.contains("is-expanded")) return;

      activeCard = card;

      // 1. Capture the initial state of the card
      const state = Flip.getState(card);

      // 2. Mutate DOM / CSS classes to target state
      card.classList.add("is-expanded");
      backdrop.classList.add("is-active");
      closeBtn.classList.add("is-active");

      const expandedContent = card.querySelector(".expanded-content");

      // 3. Animate smoothly from initial state to target modal
      Flip.from(state, {
        duration: 0.55,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(expandedContent, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out"
          });
        }
      });

      // Prepare hidden content for fade in
      gsap.set(expandedContent, { opacity: 0, y: 15 });
    });
  });

  // Close modal function
  const closeModal = () => {
    if (!activeCard) return;

    const card = activeCard;
    const expandedContent = card.querySelector(".expanded-content");

    // Fade out expanded content first
    gsap.to(expandedContent, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        const state = Flip.getState(card);

        card.classList.remove("is-expanded");
        backdrop.classList.remove("is-active");
        closeBtn.classList.remove("is-active");

        Flip.from(state, {
          duration: 0.45,
          ease: "power3.inOut",
          onComplete: () => {
            activeCard = null;
          }
        });
      }
    });
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
