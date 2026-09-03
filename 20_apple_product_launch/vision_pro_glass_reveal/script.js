gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision-hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1
  }
});

// The goggles come into view
tl.to(".glass-goggles", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out"
})
// Blur the background world even more to emphasize depth of field
.to(".background-world", {
  filter: "blur(20px)",
  duration: 1
}, "<")
// UI Elements appear inside the glass
.to(".ui-element", {
  opacity: 1,
  duration: 0.5
})
// Goggles expand to fill screen
.to(".glass-goggles", {
  width: "100vw",
  height: "100vh",
  borderRadius: "0px",
  duration: 1.5,
  ease: "power2.inOut"
})
// Fade out UI and reveal final text
.to(".ui-element", { opacity: 0, duration: 0.5 }, "-=0.5")
.to(".hero-text", { opacity: 1, y: -30, duration: 1 }, "-=0.5");
