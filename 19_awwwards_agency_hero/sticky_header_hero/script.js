gsap.registerPlugin(ScrollTrigger);

// Animate the huge logo into a sticky header nav-bar logo
gsap.to(".logo-wrapper", {
  top: "30px", // Move to top
  scale: 0.1,  // Shrink dramatically
  yPercent: -50,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: true, // Smooth transition on scroll
    pin: false
  }
});

// Fix the logo once the hero is passed so it stays as a header
ScrollTrigger.create({
  trigger: ".hero-section",
  start: "top top",
  endTrigger: "body",
  end: "bottom bottom",
  pin: ".logo-wrapper", // Pin just the wrapper to act as header
  pinSpacing: false
});

// Parallax the image
gsap.to(".hero-image", {
  y: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
