// Top half moves left
gsap.to(".track-top", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// Bottom half moves right
gsap.fromTo(".track-bottom", 
  { xPercent: -50 },
  {
    xPercent: 0,
    ease: "none",
    duration: 15,
    repeat: -1
  }
);
