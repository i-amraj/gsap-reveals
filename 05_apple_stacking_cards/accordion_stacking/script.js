gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");
const tabHeight = 80; // The offset step

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  
  // Calculate the offset for this specific card
  const offset = i * tabHeight;

  ScrollTrigger.create({
    trigger: container,
    // Pin exactly at its offset from the top
    start: `top top+=${offset}`,
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  });

  if (i < containers.length - 1) {
    // Optionally shrink slightly to add depth, but keep it subtle so tabs align
    gsap.to(card, {
      scale: 0.95,
      filter: "brightness(0.5)",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: `top top+=${offset}`,
        end: () => `+=${container.offsetHeight}`,
        scrub: true,
      }
    });
  }
});
