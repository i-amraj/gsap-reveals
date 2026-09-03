const btn = document.querySelector(".magnetic-btn");
const text = document.querySelector(".btn-text");

// Use quickTo for high performance following
const xTo = gsap.quickTo(btn, "x", {duration: 0.8, ease: "elastic.out(1, 0.3)"});
const yTo = gsap.quickTo(btn, "y", {duration: 0.8, ease: "elastic.out(1, 0.3)"});

const textXTo = gsap.quickTo(text, "x", {duration: 0.6, ease: "power2.out"});
const textYTo = gsap.quickTo(text, "y", {duration: 0.6, ease: "power2.out"});

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const relX = e.clientX - (rect.left + rect.width / 2);
  const relY = e.clientY - (rect.top + rect.height / 2);
  
  // Move button slightly towards mouse
  xTo(relX * 0.4);
  yTo(relY * 0.4);
  
  // Move text even further to create parallax
  textXTo(relX * 0.2);
  textYTo(relY * 0.2);
});

btn.addEventListener("mouseleave", () => {
  // Snap back to origin
  xTo(0);
  yTo(0);
  textXTo(0);
  textYTo(0);
});
