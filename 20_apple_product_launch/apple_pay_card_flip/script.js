gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pay-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Initially rotated slightly
gsap.set(".card", { rotationY: -20, rotationX: 10 });

// Flip the card and slide the shine
tl.to(".card", {
  rotationY: 180, // Flip over
  rotationX: 0,
  scale: 1.2, // enlarge slightly
  duration: 2,
  ease: "power2.inOut"
})
// Sweep the shine across the front during the flip
.to(".shine", {
  left: "200%",
  duration: 1
}, 0) // Start at time 0
.to(".hero-text h1", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out"
}, "-=1");
