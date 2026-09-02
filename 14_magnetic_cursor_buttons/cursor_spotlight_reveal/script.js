const cursor = document.getElementById("cursor");
const spotlight = document.getElementById("spotlight");
const xTo = gsap.quickTo(cursor,"x",{duration:0.1,ease:"none"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.1,ease:"none"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX); yTo(e.clientY);
  // Move the radial gradient center to the mouse position
  spotlight.style.background = `radial-gradient(circle 180px at ${e.clientX}px ${e.clientY}px, transparent 0%, rgba(0,0,0,0.97) 100%)`;
});
