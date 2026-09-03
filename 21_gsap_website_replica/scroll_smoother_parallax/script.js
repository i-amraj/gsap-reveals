gsap.registerPlugin(ScrollTrigger);

// Since ScrollSmoother is a Club GreenSock plugin, we will manually
// simulate its `data-speed` parallax parsing functionality using standard ScrollTrigger.

const parallaxElements = document.querySelectorAll("[data-speed]");

parallaxElements.forEach(el => {
  const speed = parseFloat(el.getAttribute("data-speed"));
  
  // Normal speed is 1. Less than 1 is slower (moves up less/appears to lag). Greater than 1 is faster (moves up more).
  const yOffset = (1 - speed) * 300; 

  gsap.to(el, {
    y: yOffset,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});
