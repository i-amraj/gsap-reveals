gsap.registerPlugin(ScrollTrigger);

const containers = gsap.utils.toArray(".card-container");

containers.forEach((container, i) => {
  const card = container.querySelector(".card");
  const video = container.querySelector(".bg-video");
  
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${container.offsetHeight}`,
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      // Play when this card reaches the top
      video.play().catch(e => console.log("Autoplay prevented"));
    },
    onLeave: () => {
      // Pause when the next card fully covers it
      video.pause();
    },
    onEnterBack: () => {
      // Play when scrolling back up to this card
      video.play().catch(e => console.log("Autoplay prevented"));
    },
    onLeaveBack: () => {
      // Pause when scrolling above this card
      video.pause();
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
