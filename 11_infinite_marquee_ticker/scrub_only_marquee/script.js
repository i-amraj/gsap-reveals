gsap.registerPlugin(ScrollTrigger);

// No repeat, no duration needed because it's scrubbed
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none", // Must be none/linear to match scroll precisely
  scrollTrigger: {
    trigger: "body", // Bind to the entire document scroll
    start: "top top",
    end: "bottom bottom",
    scrub: 1 // 1 second smoothing/lag for a premium feel
  }
});
