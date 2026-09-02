// Track 1: Standard leftward scroll
gsap.to(".track-1", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// Track 2: Rightward scroll
// To loop seamlessly going right, we must start halfway through (-50%) 
// and animate back to the physical start (0%).
gsap.fromTo(".track-2", 
  { xPercent: -50 }, 
  {
    xPercent: 0,
    ease: "none",
    duration: 15,
    repeat: -1
  }
);
