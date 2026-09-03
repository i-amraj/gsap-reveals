gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lens-hero",
    start: "top top",
    end: "+=2500", // Long scroll to allow for massive zoom
    pin: true,
    scrub: 1
  }
});

tl.to(".camera-module", {
  scale: 40, // Zoom in MASSIVELY
  x: "100vw", // Shift so the top lens centers on screen
  y: "100vh",
  duration: 2,
  ease: "power2.in"
})
.to(".lens-world", {
  opacity: 1, // as we zoom, the world inside the lens gets bright
  duration: 1
}, "-=1.5")
.to(".hero-text", {
  opacity: 0,
  duration: 0.5
}, "-=2");
