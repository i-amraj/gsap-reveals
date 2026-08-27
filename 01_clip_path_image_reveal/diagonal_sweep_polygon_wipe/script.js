gsap.registerPlugin(ScrollTrigger);

// Diagonal Polygon Sweep Reveal
gsap.to(".diagonal-img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".diagonal-container",
    start: "top top",
    end: "+=1200",
    scrub: 1,
    pin: true
  }
});

gsap.from(".overlay-text h2, .overlay-text p", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".diagonal-container",
    start: "top 40%",
    end: "top top",
    scrub: 1
  }
});
