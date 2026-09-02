const dot  = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");

// Dot: snaps instantly (very low duration)
const dotXTo = gsap.quickTo(dot, "x", { duration: 0.05, ease: "none" });
const dotYTo = gsap.quickTo(dot, "y", { duration: 0.05, ease: "none" });

// Ring: lags significantly (higher duration for trailing feel)
const ringXTo = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
const ringYTo = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  dotXTo(e.clientX);
  dotYTo(e.clientY);
  ringXTo(e.clientX);
  ringYTo(e.clientY);
});

// Morph the ring when hovering interactive elements
document.querySelectorAll("a, button, .card, [data-cursor]").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    ring.classList.add("hovering");
    gsap.to(dot, { scale: 0, duration: 0.2 });
  });
  el.addEventListener("mouseleave", () => {
    ring.classList.remove("hovering");
    gsap.to(dot, { scale: 1, duration: 0.2 });
  });
});

// Hide both on mouse leave
document.addEventListener("mouseleave", () => {
  gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
});
document.addEventListener("mouseenter", () => {
  gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
});
