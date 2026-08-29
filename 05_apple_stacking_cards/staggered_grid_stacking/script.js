gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".grid-container");

containers.forEach((container, i) => {
  const cards = container.querySelectorAll(".card");
  
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
  });

  if (i < containers.length - 1) {
    // Instead of shrinking the whole wrapper, shrink the children with stagger
    gsap.to(cards, {
      scale: 0.5,
      opacity: 0,
      stagger: 0.1, // This makes the inner cards disappear one by one
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
