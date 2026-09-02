const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

// Open the panels like a book
gsap.set(".left-panel", { xPercent: -100 });
gsap.set(".right-panel", { xPercent: 100 });

tl.to([".left-panel", ".right-panel"], {
  xPercent: 0,
  duration: 1.2,
  stagger: 0.1
})
// Reveal image
.to(".image-reveal", {
  clipPath: "inset(0% 0% 0% 0%)",
  duration: 1.5
}, "-=0.5")
.to(".image-inner", {
  scale: 1,
  duration: 2
}, "-=1.5")
// Reveal Text
.to(".split-line span", {
  y: "0%",
  duration: 1,
  stagger: 0.1
}, "-=1.8")
.to(".fade-in", {
  opacity: 1,
  y: -10,
  duration: 1
}, "-=1.2");
