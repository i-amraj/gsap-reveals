gsap.registerPlugin(ScrollTrigger);

const bgLayer = document.getElementById("bg-layer");
const midLayer = document.getElementById("mid-layer");
const fgLayer = document.getElementById("fg-layer");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: "+=3000",
    invalidateOnRefresh: true
  }
});

// Animate each layer at a different speed (different x distance over the same scroll duration)
tl.to(bgLayer, { x: () => -(bgLayer.scrollWidth - window.innerWidth) * 0.3, ease: "none" }, 0)
  .to(midLayer, { x: () => -(midLayer.scrollWidth - window.innerWidth) * 0.7, ease: "none" }, 0)
  .to(fgLayer, { x: () => -(fgLayer.scrollWidth - window.innerWidth) * 1.2, ease: "none" }, 0);
