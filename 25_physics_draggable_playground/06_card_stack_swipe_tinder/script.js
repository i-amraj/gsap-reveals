// Physics 06: Velocity Swipe Card Stack Deck with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable);

  let cards = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3")
  ];

  const stampLike = document.getElementById("stampLike");
  const stampNope = document.getElementById("stampNope");
  const btnLike = document.getElementById("btnLike");
  const btnNope = document.getElementById("btnNope");
  const btnReset = document.getElementById("btnReset");

  const swipeThreshold = 120; // Pixels needed to trigger discard

  // Layout the stack with perspective scale & vertical offset
  function updateStack() {
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: index * 14,
        scale: 1 - index * 0.05,
        opacity: 1 - index * 0.15,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    initTopCardDraggable();
  }

  let activeDraggable = null;

  function initTopCardDraggable() {
    if (activeDraggable) activeDraggable[0].kill();
    if (cards.length === 0) return;

    const topCard = cards[0];

    activeDraggable = Draggable.create(topCard, {
      type: "x,y",
      edgeResistance: 0.65,
      onDrag: function() {
        // Dynamic banking rotation
        const rot = this.x * 0.08;
        gsap.set(this.target, { rotation: rot });

        // Fade stamp indicators
        if (this.x > 20) {
          stampLike.style.opacity = Math.min(1, (this.x - 20) / 80);
          stampNope.style.opacity = 0;
        } else if (this.x < -20) {
          stampNope.style.opacity = Math.min(1, (-this.x - 20) / 80);
          stampLike.style.opacity = 0;
        } else {
          stampLike.style.opacity = 0;
          stampNope.style.opacity = 0;
        }
      },
      onRelease: function() {
        stampLike.style.opacity = 0;
        stampNope.style.opacity = 0;

        if (this.x > swipeThreshold) {
          dismissCard(this.target, 1); // Discard Right (Accept)
        } else if (this.x < -swipeThreshold) {
          dismissCard(this.target, -1); // Discard Left (Pass)
        } else {
          // Spring back to deck center
          gsap.to(this.target, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.6)"
          });
        }
      }
    });
  }

  // Dismiss card with high-speed trajectory
  function dismissCard(card, direction) {
    gsap.to(card, {
      x: direction * 600,
      y: (Math.random() - 0.5) * 200,
      rotation: direction * 45,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {
        card.style.display = "none";
        cards.shift(); // Remove top card
        updateStack();
      }
    });
  }

  // Button actions
  btnLike.addEventListener("click", () => {
    if (cards.length > 0) dismissCard(cards[0], 1);
  });

  btnNope.addEventListener("click", () => {
    if (cards.length > 0) dismissCard(cards[0], -1);
  });

  btnReset.addEventListener("click", () => {
    const all = [
      document.getElementById("card1"),
      document.getElementById("card2"),
      document.getElementById("card3")
    ];

    all.forEach(c => {
      c.style.display = "flex";
      gsap.set(c, { x: 0, y: 0, rotation: 0, opacity: 1 });
    });

    cards = [...all];
    updateStack();
  });

  updateStack();
});
