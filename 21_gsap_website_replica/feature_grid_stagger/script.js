gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".features-section",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

tl.to(".section-title h2", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "back.out(1.5)"
})
.to(".feature-card", {
  opacity: 1,
  rotationY: 0,
  translateZ: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: "back.out(1.5)"
}, "-=0.4");
