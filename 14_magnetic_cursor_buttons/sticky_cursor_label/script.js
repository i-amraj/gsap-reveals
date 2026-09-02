const wrap = document.getElementById("cursor-wrap");
const label = document.getElementById("cursor-label");
const xTo = gsap.quickTo(wrap,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(wrap,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

document.querySelectorAll("[data-tip]").forEach(el=>{
  el.addEventListener("mouseenter",()=>{ label.innerText=el.dataset.tip; wrap.classList.add("has-label"); });
  el.addEventListener("mouseleave",()=>{ wrap.classList.remove("has-label"); });
});
