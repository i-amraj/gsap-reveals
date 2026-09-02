// Track 1: Fast left
gsap.to(".track-1", {
  xPercent: -50,
  ease: "none",
  duration: 12,
  repeat: -1
});

// Track 2: Slow right
gsap.fromTo(".track-2", 
  { xPercent: -50 },
  {
    xPercent: 0,
    ease: "none",
    duration: 25,
    repeat: -1
  }
);

// Track 3: Fastest left
gsap.to(".track-3", {
  xPercent: -50,
  ease: "none",
  duration: 8,
  repeat: -1
});
