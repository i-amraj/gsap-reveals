gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  
  // Create a ScrollTrigger that pins the container
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false, // Essential for stacking
  });

  // Animate the current card tilting back into 3D space when the NEXT card scrolls up
  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.85,
      rotationX: -15, // Tilt backwards
      y: -20, // Move slightly up to enhance depth
      filter: "brightness(0.3)", // Darken the card
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.offsetHeight}`,
        scrub: true,
      }
    });
  }
});
