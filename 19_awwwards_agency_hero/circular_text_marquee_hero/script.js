gsap.registerPlugin(ScrollTrigger);

// On load animation for the main text
gsap.from(".content h1", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.2
});

// The badge rotates infinitely via CSS, but we can make it spin FASTER on scroll!
gsap.to("#badge-svg", {
  rotation: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: 0.5
  }
});
