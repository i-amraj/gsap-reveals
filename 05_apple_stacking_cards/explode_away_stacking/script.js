gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");

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
    // Instead of scaling down, scale UP and fade out with blur (Burst effect)
    gsap.fromTo(card, 
      { filter: "blur(0px)" },
      {
        scale: 1.5,
        opacity: 0,
        filter: "blur(30px)",
        ease: "power2.in",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.offsetHeight}`,
          scrub: true,
        }
      }
    );
  }
});
