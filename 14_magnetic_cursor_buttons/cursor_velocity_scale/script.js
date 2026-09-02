const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.2,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.2,ease:"power3"});
let lx=0,ly=0,tid;

window.addEventListener("mousemove", e => {
  xTo(e.clientX); yTo(e.clientY);
  const speed = Math.hypot(e.clientX-lx, e.clientY-ly);
  lx=e.clientX; ly=e.clientY;
  const s = 1 + Math.min(speed*0.05, 4); // Max 5x scale
  gsap.to(cursor, { scale:s, duration:0.1 });
  clearTimeout(tid);
  tid = setTimeout(()=>gsap.to(cursor, { scale:1, duration:0.5, ease:"power3.out" }), 80);
});
