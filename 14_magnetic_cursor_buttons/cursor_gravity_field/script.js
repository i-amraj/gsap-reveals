const cursor = document.getElementById("cursor");
const field = document.getElementById("field");
const xTo = gsap.quickTo(cursor,"x",{duration:0.2,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.2,ease:"power3"});

let mx=window.innerWidth/2, my=window.innerHeight/2;
window.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;xTo(mx);yTo(my);});

// Generate 30 gravity particles at random positions
const dots=[];
for(let i=0;i<30;i++){
  const dot=document.createElement("div");
  dot.classList.add("gravity-dot");
  const ox=Math.random()*window.innerWidth;
  const oy=Math.random()*window.innerHeight;
  dot.style.left=ox+"px"; dot.style.top=oy+"px";
  dot._ox=ox; dot._oy=oy;
  field.appendChild(dot);
  dots.push(dot);
}

// On every tick, push each dot slightly towards the cursor
gsap.ticker.add(()=>{
  dots.forEach(dot=>{
    const r=dot.getBoundingClientRect();
    const cx=r.left+4, cy=r.top+4;
    const dx=mx-cx, dy=my-cy;
    const dist=Math.hypot(dx,dy);
    const force=Math.max(0,1-(dist/300)); // Only attract within 300px
    gsap.to(dot,{ x:`+=${dx*force*0.08}`, y:`+=${dy*force*0.08}`, duration:0.3, ease:"none" });
  });
});
