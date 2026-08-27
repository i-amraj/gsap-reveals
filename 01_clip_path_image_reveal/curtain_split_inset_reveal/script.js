gsap.registerPlugin(ScrollTrigger);

// Curtain Inset Reveal Animation
gsap.to(".curtain-img", {
  clipPath: "inset(0% 0% 0% 0%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".curtain-container",
    start: "top top",
    end: "+=1200",
    scrub: 1,
    pin: true
  }
});

gsap.from(".overlay-text h2, .overlay-text p", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".curtain-container",
    start: "top 40%",
    end: "top top",
    scrub: 1
  }
});
