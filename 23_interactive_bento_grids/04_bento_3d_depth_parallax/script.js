// Bento Grid 04: 3D Depth Multi-Layer Parallax with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".parallax-card");

  // Entrance stagger
  gsap.from(cards, {
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out"
  });

  cards.forEach((card) => {
    const layers = card.querySelectorAll(".parallax-layer");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;

      // 1. Tilt parent card container slightly
      gsap.to(card, {
        rotateX: normY * -8,
        rotateY: normX * 8,
        duration: 0.4,
        ease: "power2.out"
      });

      // 2. Animate individual spatial layers based on data-depth
      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute("data-depth")) || 0.2;
        const moveX = normX * (depth * 45);
        const moveY = normY * (depth * 45);
        const translateZ = depth * 60; // Pop out towards screen

        gsap.to(layer, {
          x: moveX,
          y: moveY,
          z: translateZ,
          duration: 0.45,
          ease: "power2.out"
        });
      });
    });

    card.addEventListener("mouseleave", () => {
      // Smooth reset with elastic recovery
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)"
      });

      layers.forEach((layer) => {
        gsap.to(layer, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.6)"
        });
      });
    });
  });
});
