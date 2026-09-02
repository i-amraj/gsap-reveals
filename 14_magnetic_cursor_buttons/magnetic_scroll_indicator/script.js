const cursor = document.getElementById("cursor");
const indicator = document.getElementById("scroll-indicator");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

indicator.addEventListener("mousemove", e=>{
  const r=indicator.getBoundingClientRect();
  const dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2);
  gsap.to(indicator,{x:dx*0.5,y:dy*0.5,duration:0.3,ease:"power3.out"});
});
indicator.addEventListener("mouseleave",()=>{
  gsap.to(indicator,{x:0,y:0,duration:0.8,ease:"elastic.out(1,0.4)"});
});
