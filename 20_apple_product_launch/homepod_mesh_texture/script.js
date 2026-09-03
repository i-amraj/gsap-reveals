gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mesh-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Zoom deep into the mesh pattern
tl.to(".mesh-bg", {
  scale: 10,
  opacity: 0.1, // fade out slightly as it gets huge
  duration: 2,
  ease: "power2.in"
})
// Siri glow expands out
.to(".gradient-overlay", {
  opacity: 1,
  scale: 2,
  duration: 1.5,
  ease: "power2.out"
}, "-=1.5")
// Text floats up
.from(".text-content h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.5)"
}, "-=1");
