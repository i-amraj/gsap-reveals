const cursor = document.getElementById("cursor");
const xTo = gsap.quickTo(cursor,"x",{duration:0.4,ease:"power3"});
const yTo = gsap.quickTo(cursor,"y",{duration:0.4,ease:"power3"});
window.addEventListener("mousemove",e=>{xTo(e.clientX);yTo(e.clientY);});

const zoneColors = { "zone-dark":"#ffffff", "zone-light":"#111111", "zone-color":"#facc15" };
document.querySelectorAll(".zone").forEach(zone => {
  const cls = Array.from(zone.classList).find(c => c.startsWith("zone-") && c !== "zone");
  zone.addEventListener("mouseenter", () => {
    gsap.to(cursor, { background: zoneColors[cls], duration:0.4 });
  });
});
