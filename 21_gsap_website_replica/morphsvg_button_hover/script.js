// We simulate MorphSVG by providing an exact matching point-count path
// Initial Pill: "M 50,10 L 250,10 C 272,10 290,28 290,50 C 290,72 272,90 250,90 L 50,90 C 28,90 10,72 10,50 C 10,28 28,10 50,10 Z"
// Hover Shape (Jagged Polygon roughly same points):
const targetPath = "M 30,0 L 270,20 C 280,30 300,50 280,70 C 270,80 260,100 240,90 L 60,100 C 40,90 0,80 10,50 C 20,30 10,20 30,0 Z";
const basePath = document.querySelector(".btn-path").getAttribute("d");

const wrapper = document.querySelector(".morph-btn-wrapper");

wrapper.addEventListener("mouseenter", () => {
  gsap.to(".btn-path", {
    attr: { d: targetPath },
    fill: "#a2e604",
    duration: 0.6,
    ease: "elastic.out(1, 0.4)"
  });
  gsap.to(".btn-text", { scale: 1.1, duration: 0.3 });
});

wrapper.addEventListener("mouseleave", () => {
  gsap.to(".btn-path", {
    attr: { d: basePath },
    fill: "#88ce02",
    duration: 0.6,
    ease: "elastic.out(1, 0.4)"
  });
  gsap.to(".btn-text", { scale: 1, duration: 0.3 });
});
