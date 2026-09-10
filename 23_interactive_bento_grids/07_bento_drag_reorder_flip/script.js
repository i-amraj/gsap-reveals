// Bento Grid 07: Dynamic Bento Filtering & Reorder with GSAP Flip
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Flip);

  const grid = document.getElementById("gridContainer");
  const cards = document.querySelectorAll(".bento-card");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const shuffleBtn = document.getElementById("shuffleBtn");

  // Filter functionality with Flip
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      // 1. Capture current positions before DOM change
      const state = Flip.getState(cards);

      // 2. Toggle visibility
      cards.forEach((card) => {
        const cat = card.getAttribute("data-cat");
        if (filter === "all" || cat === filter) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });

      // 3. Animate layout transition smoothly
      Flip.from(state, {
        duration: 0.6,
        ease: "power3.inOut",
        stagger: 0.05,
        onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.4 }),
        onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0.85, duration: 0.3 })
      });
    });
  });

  // Shuffle order functionality
  shuffleBtn.addEventListener("click", () => {
    const visibleCards = Array.from(cards).filter(c => !c.classList.contains("is-hidden"));
    
    // 1. Capture state
    const state = Flip.getState(visibleCards);

    // 2. Fisher-Yates shuffle visible elements inside container
    for (let i = visibleCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      grid.appendChild(visibleCards[j]);
    }

    // 3. Animate with spring/smooth interpolation
    Flip.from(state, {
      duration: 0.65,
      ease: "power3.out",
      stagger: 0.04
    });
  });
});
