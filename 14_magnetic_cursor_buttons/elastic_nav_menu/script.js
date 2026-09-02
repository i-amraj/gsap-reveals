const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mousemove", e => {
    const r = link.getBoundingClientRect();
    const cx = r.left + r.width/2, cy = r.top + r.height/2;
    gsap.to(link, { x:(e.clientX-cx)*0.5, y:(e.clientY-cy)*0.5, duration:0.3, ease:"power3.out" });
    gsap.to(cursor, { scale:2.5, duration:0.3 });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, { x:0, y:0, duration:0.8, ease:"elastic.out(1,0.4)" });
    gsap.to(cursor, { scale:1, duration:0.3 });
  });
});
