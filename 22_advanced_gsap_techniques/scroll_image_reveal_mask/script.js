gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".reveal-section",
    start: "top center",
    end: "bottom center",
    scrub: 1
  }
});

// 1. Expand the mask to reveal the full image using CSS clip-path inset
tl.to(".image-mask", {
  clipPath: "inset(0% 0% 0% 0% round 20px)",
  ease: "power2.inOut"
}, 0);

// 2. Simultaneously scale the image down to normal size to create depth
tl.to(".image-mask img", {
  scale: 1,
  ease: "power2.inOut"
}, 0);
