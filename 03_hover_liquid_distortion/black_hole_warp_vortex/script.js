const card = document.querySelector(".vortex-card");
const img = document.querySelector(".vortex-img");
const dispMap = document.querySelector("#vortexDispMap");

card.addEventListener("mouseenter", () => {
  // Extreme displacement (e.g. 150) and shrink the image to simulate getting sucked in
  gsap.to(dispMap, { attr: { scale: 150 }, duration: 1.5, ease: "power4.out" });
  gsap.to(img, { scale: 0.7, rotation: -5, duration: 1.5, ease: "power4.out" });
});

card.addEventListener("mouseleave", () => {
  // Snap back out
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 1.5, ease: "elastic.out(1, 0.4)" });
  gsap.to(img, { scale: 1.1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.4)" });
});
