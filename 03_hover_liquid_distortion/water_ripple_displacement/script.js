const card = document.querySelector(".liquid-card");
const dispMap = document.querySelector("#liquidDispMap");
const turbulence = document.querySelector("#liquidTurbulence");

card.addEventListener("mouseenter", () => {
  gsap.to(dispMap, {
    attr: { scale: 50 },
    duration: 0.6,
    ease: "power2.out"
  });
});

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const relX = (e.clientX - rect.left) / rect.width;
  const relY = (e.clientY - rect.top) / rect.height;

  // Dynamically shift baseFrequency based on cursor speed/position
  gsap.to(turbulence, {
    attr: { baseFrequency: `${0.015 + relX * 0.02} ${0.02 + relY * 0.02}` },
    duration: 0.3,
    overwrite: "auto"
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(dispMap, {
    attr: { scale: 0 },
    duration: 0.8,
    ease: "power3.out"
  });
});
