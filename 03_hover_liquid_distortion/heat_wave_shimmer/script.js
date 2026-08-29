const card = document.querySelector(".heat-card");
const dispMap = document.querySelector("#heatDispMap");

card.addEventListener("mouseenter", () => {
  gsap.to(dispMap, { attr: { scale: 35 }, duration: 0.8, ease: "power2.out" });
});

card.addEventListener("mouseleave", () => {
  gsap.to(dispMap, { attr: { scale: 10 }, duration: 1.2, ease: "power3.out" });
});
