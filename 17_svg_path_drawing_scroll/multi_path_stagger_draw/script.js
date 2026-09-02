gsap.registerPlugin(ScrollTrigger);

const paths = gsap.utils.toArray(".stagger-path");

// Setup each path individually based on its length
paths.forEach(p => {
  const l = p.getTotalLength();
  gsap.set(p, { strokeDasharray: l, strokeDashoffset: l });
});

// Animate them together using stagger
gsap.to(paths, {
  strokeDashoffset: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".multi-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
