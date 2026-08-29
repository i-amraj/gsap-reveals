const card = document.querySelector(".frost-card");
const frostOverlay = document.querySelector(".frost-overlay");

// GSAP quickTo for smooth performant cursor tracking
const xTo = gsap.quickTo(frostOverlay, "--x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(frostOverlay, "--y", { duration: 0.4, ease: "power3" });

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  xTo(`${x}%`);
  yTo(`${y}%`);
});

card.addEventListener("mouseenter", () => {
  // Expand the clear area size to simulate wiping the glass
  gsap.to(frostOverlay, {
    "--size": "120px",
    duration: 0.5,
    ease: "power2.out"
  });
});

card.addEventListener("mouseleave", () => {
  // Let the condensation freeze back over
  gsap.to(frostOverlay, {
    "--size": "0px",
    duration: 1.5,
    ease: "power3.inOut"
  });
});
