const card = document.querySelector(".boom-card");
const dispMap = document.querySelector("#shockDispMap");
let isAnimating = false;

card.addEventListener("mouseenter", () => {
  if (isAnimating) return;
  isAnimating = true;

  // Immediate blast up to 100, then smoothly back down to 0
  gsap.timeline({ onComplete: () => { isAnimating = false; } })
    .to(dispMap, { attr: { scale: 100 }, duration: 0.15, ease: "power4.out" })
    .to(dispMap, { attr: { scale: 0 }, duration: 0.8, ease: "power2.out" });
});
