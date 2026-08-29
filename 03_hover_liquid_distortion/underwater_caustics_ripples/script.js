const card = document.querySelector(".aqua-card");
const dispMap = document.querySelector("#causticDispMap");
const turbAnim = document.querySelector("#turbAnim");

card.addEventListener("mouseenter", () => {
  // Increase displacement to simulate deeper current
  gsap.to(dispMap, { attr: { scale: 35 }, duration: 0.8, ease: "power2.out" });
  // Speed up the SVG animation by shortening duration
  turbAnim.setAttribute("dur", "3s");
});

card.addEventListener("mouseleave", () => {
  gsap.to(dispMap, { attr: { scale: 15 }, duration: 1.2, ease: "power3.out" });
  turbAnim.setAttribute("dur", "8s");
});
