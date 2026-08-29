const card = document.querySelector(".rgb-card");
const redLayer = document.querySelector(".red-layer");
const blueLayer = document.querySelector(".blue-layer");
const dispMap = document.querySelector("#rgbDispMap");

card.addEventListener("mouseenter", () => {
  gsap.to([redLayer, blueLayer], { opacity: 0.85, duration: 0.3 });
  gsap.to(dispMap, { attr: { scale: 45 }, duration: 0.5, ease: "power2.out" });
});

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const relX = (e.clientX - rect.left - rect.width / 2) * 0.15;
  const relY = (e.clientY - rect.top - rect.height / 2) * 0.15;

  gsap.to(redLayer, { x: relX, y: relY, duration: 0.2, overwrite: "auto" });
  gsap.to(blueLayer, { x: -relX, y: -relY, duration: 0.2, overwrite: "auto" });
});

card.addEventListener("mouseleave", () => {
  gsap.to([redLayer, blueLayer], { opacity: 0, x: 0, y: 0, duration: 0.4 });
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 0.6, ease: "power3.out" });
});
