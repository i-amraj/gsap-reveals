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
    // Standard approach: GSAP animate CSS filter. 
    // It's a string, so GSAP interpolates the numbers inside it natively.
    gsap.fromTo(card, 
      { filter: "blur(0px) brightness(1)" },
      {
        scale: 0.92,
        filter: "blur(15px) brightness(0.4)",
        ease: "none",
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
