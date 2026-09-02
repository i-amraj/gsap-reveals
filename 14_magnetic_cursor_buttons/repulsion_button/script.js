const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".repel-btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const r = btn.getBoundingClientRect();
    const dx = e.clientX-(r.left+r.width/2), dy = e.clientY-(r.top+r.height/2);
    // REPULSION: move OPPOSITE direction (negative multiplier)
    gsap.to(btn, { x:-dx*0.6, y:-dy*0.6, duration:0.3, ease:"power3.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x:0, y:0, duration:0.8, ease:"elastic.out(1,0.4)" });
  });
});
