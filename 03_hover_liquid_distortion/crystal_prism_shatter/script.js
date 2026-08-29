const card = document.querySelector(".crystal-card");
const shards = gsap.utils.toArray(".shard");

// Define custom explosion translations for each shard
const translations = [
  { x: -50, y: -50, scale: 1.1, rotation: -5 },
  { x: 30, y: -60, scale: 1.15, rotation: 8 },
  { x: -70, y: 10, scale: 1.1, rotation: -10 },
  { x: -20, y: 50, scale: 1.12, rotation: 4 },
  { x: 60, y: 40, scale: 1.2, rotation: 12 },
  { x: 20, y: 70, scale: 1.1, rotation: -6 }
];

card.addEventListener("mouseenter", () => {
  shards.forEach((shard, i) => {
    gsap.to(shard, {
      x: translations[i].x,
      y: translations[i].y,
      scale: translations[i].scale,
      rotation: translations[i].rotation,
      filter: "brightness(1.2) drop-shadow(0px 10px 20px rgba(0,0,0,0.5))",
      duration: 0.6,
      ease: "power3.out"
    });
  });
});

card.addEventListener("mouseleave", () => {
  shards.forEach(shard => {
    gsap.to(shard, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      filter: "brightness(1) drop-shadow(0px 0px 0px rgba(0,0,0,0))",
      duration: 0.8,
      ease: "power2.out"
    });
  });
});
