const card = document.querySelector(".mag-card");

const xTo = gsap.quickTo(card, "x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(card, "y", { duration: 0.4, ease: "power3" });

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const relX = e.clientX - rect.left - rect.width / 2;
  const relY = e.clientY - rect.top - rect.height / 2;

  xTo(relX * 0.25);
  yTo(relY * 0.25);
});

card.addEventListener("mouseleave", () => {
  xTo(0);
  yTo(0);
});
