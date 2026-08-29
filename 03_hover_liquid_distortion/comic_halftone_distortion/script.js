const card = document.querySelector(".comic-card");
const dispMap = document.querySelector("#comicDispMap");

card.addEventListener("mouseenter", () => {
  // Warp the halftone background
  gsap.to(dispMap, { attr: { scale: 30 }, duration: 0.8, ease: "power2.out" });
});

card.addEventListener("mouseleave", () => {
  // Smoothly reset
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 1.2, ease: "power3.out" });
});
