const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.2,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.2,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

// Update CSS variables for the radial gradient center inside the button
document.querySelectorAll(".glow-btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  });
});
