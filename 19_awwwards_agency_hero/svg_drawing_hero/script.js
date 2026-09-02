const paths = gsap.utils.toArray(".draw-path");
const tl = gsap.timeline();

// Calculate total length for each path and set stroke dash arrays
paths.forEach(path => {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
});

// Draw SVGs
tl.to(paths, {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power2.inOut",
  stagger: 0.5
})
// Fade in typography
.to(".elegant-title", {
  opacity: 1,
  y: -20,
  duration: 1.5,
  ease: "power3.out"
}, "-=2")
.to(".fade-in", {
  opacity: 1,
  y: -10,
  duration: 1
}, "-=1.5");
