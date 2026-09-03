gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const path = document.getElementById("signature-path");
const length = path.getTotalLength();

// Setup path drawing
gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pencil-hero",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1
  }
});

tl.to(path, {
  strokeDashoffset: 0,
  duration: 2,
  ease: "none"
}, 0)
// Bind pencil to path using MotionPathPlugin
.to(".pencil-img", {
  motionPath: {
    path: "#signature-path",
    align: "#signature-path",
    alignOrigin: [0, 0.5], // tip of pencil
    autoRotate: true
  },
  duration: 2,
  ease: "none"
}, 0)
.to(".hero-text h1", {
  opacity: 1,
  y: -20,
  duration: 0.5,
  ease: "power2.out"
}, "-=0.5");
