const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.05,ease:"none"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.05,ease:"none"});
const PIXEL_SIZE = 12;
const colors = ["#39ff14","#00ffff","#ff00ff","#ffff00","#ff4500"];
let lx=0,ly=0;

window.addEventListener("mousemove", e=>{
  xTo(e.clientX); yTo(e.clientY);
  const dx=e.clientX-lx, dy=e.clientY-ly;
  if(Math.hypot(dx,dy)<PIXEL_SIZE) return;
  lx=e.clientX; ly=e.clientY;
  const p=document.createElement("div");
  p.classList.add("pixel-block");
  const c=colors[Math.floor(Math.random()*colors.length)];
  p.style.width=PIXEL_SIZE+"px"; p.style.height=PIXEL_SIZE+"px";
  p.style.background=c; p.style.left=e.clientX+"px"; p.style.top=e.clientY+"px";
  p.style.boxShadow=`0 0 4px ${c}`;
  document.body.appendChild(p);
  gsap.to(p,{ opacity:0, duration:0.8, ease:"power1.out", onComplete:()=>p.remove() });
});
