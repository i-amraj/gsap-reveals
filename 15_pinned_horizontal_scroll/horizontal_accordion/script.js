gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".acc-panel");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-wrap",
    pin: true,
    scrub: 1,
    end: "+=2000"
  }
});

// Animate each panel expanding sequentially
panels.forEach((panel, i) => {
  const h2 = panel.querySelector("h2");
  const p = panel.querySelector("p");
  
  // We expand this panel, shrink others
  tl.to(panel, { flex: 5, duration: 1 })
    .to(h2, { writingMode: "horizontal-tb", transform: "rotate(0deg)", duration: 0.5 }, "<")
    .to(p, { opacity: 1, duration: 0.5 }, "<0.2");
    
  // If it's not the last one, we then collapse it back when moving to the next
  if (i < panels.length - 1) {
    tl.to(panel, { flex: 1, duration: 1 })
      .to(h2, { writingMode: "vertical-rl", transform: "rotate(180deg)", duration: 0.5 }, "<")
      .to(p, { opacity: 0, duration: 0.5 }, "<");
  }
});
