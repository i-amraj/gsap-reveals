gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  
  // Create a ScrollTrigger that pins the container
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    // Pin it for the height of the container so the next one can catch up
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false, // Essential for stacking: don't push content down
  });

  // If it's not the last card, animate it shrinking and darkening as the NEXT card scrolls up
  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      filter: "brightness(0.3)", // Darken the card
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        // The animation completes over the duration of the pin
        end: () => `+=${container.offsetHeight}`,
        scrub: true,
      }
    });
  }
});
