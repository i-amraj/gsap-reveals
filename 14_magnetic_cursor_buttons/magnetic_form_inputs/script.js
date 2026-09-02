const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".mag-field").forEach(field=>{
  field.addEventListener("mousemove",e=>{
    const r=field.getBoundingClientRect();
    const dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2);
    gsap.to(field,{x:dx*0.12,y:dy*0.12,duration:0.3,ease:"power3.out"});
  });
  field.addEventListener("mouseleave",()=>{
    gsap.to(field,{x:0,y:0,duration:0.7,ease:"elastic.out(1,0.4)"});
  });
});
