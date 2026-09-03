gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".airpods-hero",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: 1
  }
});

// Flip the lid open
tl.to(".case-lid", {
  rotationX: -180,
  y: -10, // slight shift up to simulate hinge
  duration: 1,
  ease: "power2.inOut"
})
// Buds pop up slightly
.to([".left-bud", ".right-bud"], {
  y: -20,
  duration: 0.5,
  ease: "back.out(2)",
  stagger: 0.1
}, "-=0.5")
// Whole case moves down and text reveals
.to(".airpods-case", {
  y: 150,
  scale: 1.5,
  duration: 1.5,
  ease: "power3.inOut"
}, "-=0.5")
.to(".text-reveal", {
  opacity: 1,
  y: -50,
  duration: 1,
  ease: "power2.out"
}, "-=1");
