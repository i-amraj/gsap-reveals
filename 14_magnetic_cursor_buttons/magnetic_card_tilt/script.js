const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.3,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.3,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX-r.left)/r.width-0.5)*2;  // -1 to 1
    const y = ((e.clientY-r.top)/r.height-0.5)*2;
    gsap.to(card, { rotateY:x*18, rotateX:-y*18, transformPerspective:800, scale:1.03, boxShadow:`${-x*15}px ${y*15}px 40px rgba(0,0,0,0.15)`, duration:0.3, ease:"power2.out" });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotateY:0, rotateX:0, scale:1, boxShadow:"0 4px 24px rgba(0,0,0,0.08)", duration:0.8, ease:"elastic.out(1,0.4)" });
  });
});
