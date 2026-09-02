gsap.registerPlugin(ScrollTrigger);

gsap.to(".iso-block", {
  translateZ: 0,
  opacity: 1,
  duration: 1,
  stagger: {
    amount: 1.5,
    grid: [3, 3],
    from: "start"
  },
  ease: "back.out(1.5)",
  scrollTrigger: {
    trigger: ".iso-section",
    start: "top 50%",
    toggleActions: "play none none reverse"
  }
});
