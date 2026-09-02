const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.1,ease:"none"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.1,ease:"none"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX); yTo(e.clientY);
});

// Expand lens slightly when hovering text
document.querySelectorAll(".title, .subtitle").forEach(el => {
  el.addEventListener("mouseenter", () => gsap.to(cursor, {scale: 1.5, duration: 0.3}));
  el.addEventListener("mouseleave", () => gsap.to(cursor, {scale: 1, duration: 0.3}));
});
