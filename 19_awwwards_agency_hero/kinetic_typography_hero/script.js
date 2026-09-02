gsap.registerPlugin(ScrollTrigger);

const texts = gsap.utils.toArray(".kinetic-text");

// Make them stretch and skew on scroll
texts.forEach((text, i) => {
  // Alternate directions
  const dir = i % 2 === 0 ? 1 : -1;
  
  gsap.to(text, {
    x: 200 * dir, // Move horizontally
    scaleY: 1.5, // Stretch vertically
    skewX: 10 * dir, // Skew
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
});
