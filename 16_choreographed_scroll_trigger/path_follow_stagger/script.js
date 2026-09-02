gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to(".dot", {
  opacity: 1,
  duration: 4, // Long duration for scrub
  stagger: 0.5,
  ease: "none",
  motionPath: {
    path: "#curve",
    align: "#curve",
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  },
  scrollTrigger: {
    trigger: ".path-section",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true
  }
});
