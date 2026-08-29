gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");
const resetContainer = document.querySelector(".trigger-reset");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  });

  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      filter: "brightness(0.5)",
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

// The Infinite Loop magic
ScrollTrigger.create({
  trigger: resetContainer,
  start: "top top", // When the clone hits the top
  onEnter: () => {
    // Instantly jump back to the very top (Card 1)
    window.scrollTo(0, 0);
  }
});
