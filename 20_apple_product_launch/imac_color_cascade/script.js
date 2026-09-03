gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".imac-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Staggered reveal of the iMacs
tl.to(".imac-grid", { opacity: 1, y: 0, duration: 0.1 })
  .from(".imac", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "back.out(1.5)"
  })
// The title zooms in and mixes colors
  .from(".title-overlay h1", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=1.5");
