// We don't even need ScrollTrigger for a basic marquee!
// It just runs continuously on the page.

// Animate the track to -50% (exactly halfway).
// Because the second half of the track is identical to the first half, 
// when it snaps back to 0% at the end of the animation, it is visually seamless.
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none", // Must be none/linear for a continuous loop
  duration: 15, // Lower is faster
  repeat: -1    // Infinite repeat
});
