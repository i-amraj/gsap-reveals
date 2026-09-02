const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("mouseenter",()=>gsap.to(cursor,{scale:3,duration:0.3}));
  link.addEventListener("mouseleave",()=>gsap.to(cursor,{scale:1,duration:0.3}));
});
