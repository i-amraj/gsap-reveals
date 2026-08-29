gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  const bgImg = container.querySelector(".card-bg img");
  
  // 1. Pin the container
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  });

  // 2. Animate the internal image parallax while the card is pinned
  gsap.to(bgImg, {
    yPercent: -20, // Move image up
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${container.offsetHeight}`,
      scrub: true,
    }
  });

  // 3. Animate the card shrinking and darkening when the NEXT card scrolls up
  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.92,
      filter: "brightness(0.3)", // Darken the whole card
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
