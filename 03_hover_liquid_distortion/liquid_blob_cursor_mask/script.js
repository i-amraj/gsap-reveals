const card = document.querySelector(".blob-card");
const maskContainer = document.querySelector(".blob-mask-container");

// Using quickTo for performant cursor tracking
const xTo = gsap.quickTo(maskContainer, "--x", { duration: 0.6, ease: "power3" });
const yTo = gsap.quickTo(maskContainer, "--y", { duration: 0.6, ease: "power3" });

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  xTo(`${x}%`);
  yTo(`${y}%`);
});

card.addEventListener("mouseenter", () => {
  gsap.to(maskContainer, {
    "--size": "150px", // Size of the mask blob
    duration: 0.8,
    ease: "elastic.out(1, 0.4)"
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(maskContainer, {
    "--size": "0px",
    duration: 0.6,
    ease: "power2.in"
  });
});
