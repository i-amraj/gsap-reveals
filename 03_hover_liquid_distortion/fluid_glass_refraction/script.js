const card = document.querySelector(".glass-card");
const lens = document.querySelector(".glass-lens");
const lensImg = document.querySelector(".lens-img");

const xTo = gsap.quickTo(lens, "x", { duration: 0.35, ease: "power2" });
const yTo = gsap.quickTo(lens, "y", { duration: 0.35, ease: "power2" });

const imgXTo = gsap.quickTo(lensImg, "x", { duration: 0.35, ease: "power2" });
const imgYTo = gsap.quickTo(lensImg, "y", { duration: 0.35, ease: "power2" });

card.addEventListener("mouseenter", () => {
  gsap.to(lens, { scale: 1, duration: 0.4, ease: "back.out(1.7)" });
});

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;

  xTo(relX);
  yTo(relY);

  // Counter offset inner lens image to match background positioning
  imgXTo(-relX);
  imgYTo(-relY);
});

card.addEventListener("mouseleave", () => {
  gsap.to(lens, { scale: 0, duration: 0.3, ease: "power2.in" });
});
