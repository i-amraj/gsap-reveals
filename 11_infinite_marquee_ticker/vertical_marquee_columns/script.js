// Odd columns move UP
gsap.to(".marquee-track.odd", {
  yPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// Even columns move DOWN
gsap.fromTo(".marquee-track.even", 
  { yPercent: -50 }, 
  {
    yPercent: 0,
    ease: "none",
    duration: 20, // Slightly different speed for variation
    repeat: -1
  }
);
