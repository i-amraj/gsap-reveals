const cursor = document.getElementById("cursor");
const tooltip = document.getElementById("tooltip");
const ttImg = document.getElementById("tt-img");

const cxTo = gsap.quickTo(cursor,"x",{duration:0.2,ease:"power3"});
const cyTo = gsap.quickTo(cursor,"y",{duration:0.2,ease:"power3"});
const txTo = gsap.quickTo(tooltip,"x",{duration:0.6,ease:"power3"});
const tyTo = gsap.quickTo(tooltip,"y",{duration:0.6,ease:"power3"});

window.addEventListener("mousemove", e => {
  cxTo(e.clientX); cyTo(e.clientY);
  txTo(e.clientX); tyTo(e.clientY);
});

document.querySelectorAll(".list-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    ttImg.src = item.dataset.image;
    gsap.to(tooltip, { opacity:1, scale:1, duration:0.4, ease:"back.out(1.5)" });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(tooltip, { opacity:0, scale:0.8, duration:0.3 });
  });
});
