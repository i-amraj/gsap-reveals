const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".social-icon").forEach(icon => {
  icon.addEventListener("mousemove", e => {
    const r = icon.getBoundingClientRect();
    const dx = e.clientX-(r.left+r.width/2), dy = e.clientY-(r.top+r.height/2);
    gsap.to(icon, { x:dx*0.6, y:dy*0.6, scale:1.2, duration:0.3, ease:"power3.out" });
    gsap.to(cursor, { scale:3, opacity:0.3, duration:0.2 });
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, { x:0, y:0, scale:1, duration:0.8, ease:"elastic.out(1,0.4)" });
    gsap.to(cursor, { scale:1, opacity:1, duration:0.3 });
  });
});
