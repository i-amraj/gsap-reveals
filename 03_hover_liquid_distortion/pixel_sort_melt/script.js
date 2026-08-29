const card = document.querySelector(".melt-card");
const dispMap = document.querySelector("#pixelDispMap");

card.addEventListener("mouseenter", () => {
  // Animating the scale to stretch vertically (simulating melt)
  // Because we set xChannelSelector="R" and yChannelSelector="G", 
  // and base frequency has high X frequency, the scale mostly pulls Y down/up.
  gsap.to(dispMap, { attr: { scale: 100 }, duration: 0.8, ease: "power2.out" });
});

card.addEventListener("mouseleave", () => {
  gsap.to(dispMap, { attr: { scale: 0 }, duration: 1.2, ease: "power3.out" });
});
