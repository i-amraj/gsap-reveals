gsap.registerPlugin(ScrollTrigger);

// On load animation (zoom out text slightly)
gsap.from(".mask-title", {
  scale: 1.5,
  duration: 2,
  ease: "power3.out"
});

// Scroll animation (zoom text massively until we enter the video)
gsap.to(".mask-title", {
  scale: 100, // Zoom incredibly huge so the hole in the text covers the screen
  opacity: 0,
  ease: "power2.in",
  scrollTrigger: {
    trigger: ".video-mask-hero",
    start: "top top",
    end: "+=1500", // 1500px of scrolling to dive in
    pin: true,
    scrub: true
  }
});
