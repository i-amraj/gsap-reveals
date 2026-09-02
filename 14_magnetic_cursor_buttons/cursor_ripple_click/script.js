const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.2,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.2,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

window.addEventListener("click", e => {
  // Spawn 3 concentric ripples with increasing delay
  for(let i=0;i<3;i++){
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = e.clientX+"px";
    ripple.style.top  = e.clientY+"px";
    document.body.appendChild(ripple);
    gsap.fromTo(ripple,
      { width:0, height:0, opacity:1 },
      { width:200+(i*60), height:200+(i*60), opacity:0, duration:1+(i*0.2), delay:i*0.1, ease:"power2.out",
        onComplete:()=>ripple.remove() }
    );
  }
  // Pulse the cursor on click
  gsap.to(cursor, { scale:2, opacity:0.5, duration:0.1, yoyo:true, repeat:1 });
});
