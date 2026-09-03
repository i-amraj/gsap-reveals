gsap.registerPlugin(ScrollTrigger);

// Set initial stacked 3D positions for the windows
const windows = gsap.utils.toArray(".safari-window");

windows.forEach((win, i) => {
  gsap.set(win, {
    z: -1000 + (i * 200),
    y: 500 - (i * 100),
    rotationX: 20,
    opacity: 0
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".safari-hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1
  }
});

// Animate them flying into place
tl.to(windows, {
  z: 0,
  y: (i) => i * 40 - 80, // cascade them slightly
  x: (i) => i * 40 - 80,
  rotationX: 0,
  opacity: 1,
  duration: 1.5,
  stagger: 0.2,
  ease: "power2.out"
})
.to(".hero-text h1", {
  opacity: 1,
  y: 20,
  duration: 0.5
}, "-=0.5");
