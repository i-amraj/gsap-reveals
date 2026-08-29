const card = document.querySelector(".oil-card");
const dispMap = document.querySelector("#oilDispMap");
const turbulence = document.querySelector("#oilTurbulence");

card.addEventListener("mouseenter", () => {
  // Scale up displacement to smudge
  gsap.to(dispMap, { attr: { scale: 50 }, duration: 1.5, ease: "power2.out" });
  
  // Alter base frequency slightly to create a swirling motion
  gsap.to(turbulence, { attr: { baseFrequency: 0.02 }, duration: 1.5, ease: "power2.out" });
});

card.addEventListener("mouseleave", () => {
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 1.5, ease: "power3.out" });
  gsap.to(turbulence, { attr: { baseFrequency: 0.015 }, duration: 1.5, ease: "power3.out" });
});
