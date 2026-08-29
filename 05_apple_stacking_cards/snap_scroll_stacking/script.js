gsap.registerPlugin(ScrollTrigger);

// Since we are using a custom scroll container for snapping, tell ScrollTrigger
const snapWrapper = document.querySelector(".snap-wrapper");

const containers = gsap.utils.toArray(".card-container");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  
  if (i < containers.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      filter: "brightness(0.3)",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scroller: snapWrapper, // IMPORTANT: bind to snap wrapper
        start: "top top",
        end: () => `+=${container.offsetHeight}`,
        scrub: true,
      }
    });
  }
});
