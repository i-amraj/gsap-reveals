const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX); yTo(e.clientY);
});

// Animate marquee text infinitely
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 8,
  repeat: -1
});

// Spin the whole circle slowly
gsap.to(cursor, {
  rotation: 360,
  ease: "none",
  duration: 15,
  repeat: -1
});
