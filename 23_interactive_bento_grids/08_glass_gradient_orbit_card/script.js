// Bento Grid 08: Glassmorphism Gradient Orbit Cards with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".glass-card");

  // Continuous floating orbits
  cards.forEach((card) => {
    const orbs = card.querySelectorAll(".gradient-orb");

    orbs.forEach((orb, i) => {
      // Create continuous looping motion
      const duration = 6 + i * 2;
      const xRange = 80 + i * 30;
      const yRange = 60 + i * 25;

      gsap.to(orb, {
        x: `+=${xRange}`,
        y: `+=${yRange}`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(orb, {
        scale: 1.25,
        duration: duration * 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Magnetically shift orbs towards cursor on hover
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x - rect.width / 2) / (rect.width / 2);
      const normY = (y - rect.height / 2) / (rect.height / 2);

      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          x: normX * (40 + i * 20),
          y: normY * (40 + i * 20),
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    });

    card.addEventListener("mouseleave", () => {
      orbs.forEach((orb) => {
        gsap.to(orb, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    });
  });
});
