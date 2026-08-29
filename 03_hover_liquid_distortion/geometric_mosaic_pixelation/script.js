const card = document.querySelector(".mosaic-card");
const morph = document.querySelector("#morph");

card.addEventListener("mouseenter", () => {
  // Animate morphology radius to create chunky pixel blocks
  gsap.to(morph, { attr: { radius: 15 }, duration: 0.6, ease: "steps(5)" });
});

card.addEventListener("mouseleave", () => {
  // Smoothly revert to normal
  gsap.to(morph, { attr: { radius: 0 }, duration: 0.8, ease: "power2.inOut" });
});
