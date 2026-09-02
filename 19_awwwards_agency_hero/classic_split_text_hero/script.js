const tl = gsap.timeline();

// Image reveal with scale effect
tl.from(".hero-image-wrapper", {
  clipPath: "inset(100% 0% 0% 0%)",
  duration: 1.5,
  ease: "power4.inOut"
})
.to(".hero-image", {
  scale: 1,
  duration: 2,
  ease: "power2.out"
}, "-=1.5")

// Text mask reveal
.to(".line-inner", {
  y: "0%",
  duration: 1,
  stagger: 0.15,
  ease: "power4.out"
}, "-=1")

// Fade in subtile and CTA
.to(".animate-up", {
  y: -20,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
}, "-=0.5")

// Nav bar fade in
.from(".nav-bar", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=1");
