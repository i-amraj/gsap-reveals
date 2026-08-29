const card = document.querySelector(".lava-card");
const dispMap = document.querySelector("#lavaDispMap");
const lavaColor = document.querySelector("#lavaColor");

// Intense red/orange matrix for lava
const hotLavaMatrix = `
  1 0 0 0 0.8
  0 1 0 0 0.2
  0 0 1 0 0
  0 0 0 1 0
`;

// Neutral identity matrix
const identityMatrix = `
  1 0 0 0 0
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 1 0
`;

card.addEventListener("mouseenter", () => {
  // Turn image red/orange and displace vertically to simulate drip
  gsap.to(dispMap, { attr: { scale: 80 }, duration: 1.5, ease: "power2.inOut" });
  gsap.to(lavaColor, { attr: { values: hotLavaMatrix }, duration: 1.5, ease: "power2.inOut" });
});

card.addEventListener("mouseleave", () => {
  // Cool off
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 2, ease: "power3.out" });
  gsap.to(lavaColor, { attr: { values: identityMatrix }, duration: 2, ease: "power3.out" });
});
