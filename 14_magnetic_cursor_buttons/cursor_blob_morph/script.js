const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.35,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.35,ease:"power3"});
let lastX=0,lastY=0,raf;

window.addEventListener("mousemove", e => {
  const vx = e.clientX-lastX, vy = e.clientY-lastY;
  const speed = Math.hypot(vx,vy);
  lastX=e.clientX; lastY=e.clientY;
  xTo(e.clientX); yTo(e.clientY);

  // Squish based on speed and direction
  const scaleX = 1 + Math.min(speed*0.04, 0.8);
  const scaleY = 1 - Math.min(speed*0.02, 0.4);
  const angle = Math.atan2(vy,vx) * (180/Math.PI);

  gsap.to(cursor, {
    scaleX, scaleY,
    rotation: angle,
    borderRadius: `${50-speed}%`,
    duration: 0.1
  });
  clearTimeout(raf);
  raf = setTimeout(() => {
    gsap.to(cursor, { scaleX:1, scaleY:1, rotation:0, borderRadius:"50%", duration:0.6, ease:"elastic.out(1,0.4)" });
  }, 80);
});
