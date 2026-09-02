gsap.registerPlugin(ScrollTrigger);

// A single master timeline spanning the whole document body
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

// Choreograph the entire page experience relative to the total scroll distance
tl.to(".hero-title", { y: -200, opacity: 0, stagger: 0.1, duration: 1 })
  .to(".m-box1", { x: -300, rotation: -90, opacity: 1, duration: 1 }, "-=0.5")
  .to(".m-box2", { scale: 1.5, backgroundColor: "#f43f5e", opacity: 1, duration: 1 }, "-=0.5")
  .to(".m-box3", { x: 300, rotation: 90, opacity: 1, duration: 1 }, "-=0.5")
  .to(".footer-text", { opacity: 1, scale: 1, duration: 2 });
