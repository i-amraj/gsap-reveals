gsap.registerPlugin(ScrollTrigger);

// Automatically open accordions sequentially on scroll
gsap.to(".acc-content", {
  height: "auto", // GSAP handles 'auto' nicely in modern versions
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  duration: 0.6,
  stagger: 0.4,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#acc-sec",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
