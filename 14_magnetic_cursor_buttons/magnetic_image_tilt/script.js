const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.3,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.3,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".tilt-card").forEach(card => {
  const inner = card.querySelector(".card-inner");
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;  // -1 to 1
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;   // -1 to 1
    gsap.to(inner, { rotateY: x * 15, rotateX: -y * 15, scale: 1.04, duration: 0.4, ease: "power2.out" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(inner, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.7, ease: "elastic.out(1,0.5)" });
  });
});
