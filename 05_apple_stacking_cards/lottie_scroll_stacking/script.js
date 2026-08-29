gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  const player = container.querySelector("lottie-player");
  
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
    onUpdate: (self) => {
      // Sync scroll progress (0 to 1) to Lottie progress
      if (player && player.seek) {
        // seek expects percentage string for lottie-player component
        player.seek((self.progress * 100) + "%");
      }
    }
  });

  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      filter: "brightness(0.3)",
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
