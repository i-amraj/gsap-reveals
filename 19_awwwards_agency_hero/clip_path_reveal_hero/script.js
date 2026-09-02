const tl = gsap.timeline();

// Explode the clip path from center
tl.to(".hero-image", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1.5,
  ease: "power4.inOut"
})
// Add overlay to darken image for text legibility
.to(".overlay", {
  opacity: 1,
  duration: 1
}, "-=0.5")
// Reveal text
.to(".hero-title", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "back.out(1.7)"
}, "-=0.8");
