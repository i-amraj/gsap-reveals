gsap.registerPlugin(ScrollTrigger);

gsap.to(".clip-img", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 1,
  stagger: 0.3,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: ".clip-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
