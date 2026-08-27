// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Clip-Path Expanding Circle Animation on Scroll
gsap.to(".reveal-img", {
  clipPath: "circle(100% at 50% 50%)", // Expand from 0% circle to 100% full screen
  ease: "none",
  scrollTrigger: {
    trigger: ".reveal-container",
    start: "top top",      // Lock section when container top touches viewport top
    end: "+=1500",         // Scroll 1500px to complete reveal
    scrub: 1,              // Smooth 1 second lag behind scroll position
    pin: true              // Keep container pinned in place during reveal
  }
});

// Staggered Text Entrance inside Overlay
gsap.from(".content-overlay h2, .content-overlay p", {
  y: 60,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".reveal-container",
    start: "top 30%",
    end: "top top",
    scrub: 1
  }
});
