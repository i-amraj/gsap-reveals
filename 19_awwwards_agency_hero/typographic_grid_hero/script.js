const tl = gsap.timeline();

// Stagger the cells expanding their borders
tl.from(".grid-cell", {
  backgroundColor: "#333", // Simulate grid lines drawing
  duration: 0.5,
  stagger: 0.1
})
// Reveal the massive typography
.to(".inner:not(.img-inner):not(.p-inner)", {
  y: "0%",
  duration: 1,
  stagger: 0.15,
  ease: "power4.out"
}, "-=0.2")
// Image scale down
.to(".img-inner", {
  scale: 1,
  duration: 1.5,
  ease: "power2.out"
}, "-=1")
// Paragraph fade in
.to(".p-inner", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out"
}, "-=1");
