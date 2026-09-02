gsap.registerPlugin(ScrollTrigger);

const paths = gsap.utils.toArray(".half-path");

paths.forEach(path => {
  const length = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length
  });
});

gsap.to(".half-path", {
  strokeDashoffset: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".center-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
