gsap.registerPlugin(ScrollTrigger);

// 1. The infinite marquee loop
gsap.to(".marquee-track", {
  xPercent: -50,
  ease: "none",
  duration: 15,
  repeat: -1
});

// 2. The scroll-linked color transition
// Transition from Dark to Light theme
gsap.to(".page-wrap", {
  backgroundColor: "#f8fafc",
  color: "#0f172a",
  ease: "none",
  scrollTrigger: {
    trigger: ".page-wrap",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
