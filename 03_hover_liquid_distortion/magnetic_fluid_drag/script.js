const card = document.querySelector(".drag-card");
const dispMap = document.querySelector("#fluidDispMap");
const turbulence = document.querySelector("#fluidTurbulence");

// Increase scale to make drag visible
card.addEventListener("mouseenter", () => {
  gsap.to(dispMap, { attr: { scale: 30 }, duration: 0.5, ease: "power2.out" });
});

// Update turbulence offset based on cursor to simulate magnetic drag
card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width;
  const relY = (e.clientY - rect.top) / rect.height;

  // We change baseFrequency slightly to simulate smear, 
  // or you could use a seed/offset if the SVG filter supported it.
  // Here we use baseFrequency modulation for a fluid smearing reaction.
  gsap.to(turbulence, {
    attr: { baseFrequency: `${0.015 + relX * 0.01} ${0.015 + relY * 0.01}` },
    duration: 0.3,
    overwrite: "auto"
  });
});

// Relax back
card.addEventListener("mouseleave", () => {
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 0.8, ease: "power3.out" });
  gsap.to(turbulence, { attr: { baseFrequency: "0.015 0.015" }, duration: 0.8, ease: "power3.out" });
});
