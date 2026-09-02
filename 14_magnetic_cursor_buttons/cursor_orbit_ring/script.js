const sys = document.getElementById("cursor-system");
const xTo = gsap.quickTo(sys,"x",{duration:0.5,ease:"power3"});
const yTo = gsap.quickTo(sys,"y",{duration:0.5,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

// Perpetually rotate the orbit ring
gsap.to("#orbit-ring", { rotation:360, duration:2, ease:"none", repeat:-1 });
