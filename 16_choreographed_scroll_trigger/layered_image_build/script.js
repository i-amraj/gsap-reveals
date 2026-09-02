gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#layered-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true
  }
});

// Set initial scattered states
gsap.set(".l1", { x: -500, y: -500, rotation: -45, opacity: 0 });
gsap.set(".l2", { x: 500, y: -500, rotation: 45, opacity: 0 });
gsap.set(".l3", { x: -500, y: 500, rotation: -45, opacity: 0 });
gsap.set(".l4", { x: 500, y: 500, rotation: 45, opacity: 0 });

// Animate them sequentially into their final stacked position
tl.to(".l1", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1 })
  .to(".l2", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1 }, "-=0.5")
  .to(".l3", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1 }, "-=0.5")
  .to(".l4", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 1 }, "-=0.5");
