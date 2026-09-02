gsap.registerPlugin(ScrollTrigger);

const edges = gsap.utils.toArray(".edge");

edges.forEach(edge => {
  const length = edge.getTotalLength();
  gsap.set(edge, { strokeDasharray: length, strokeDashoffset: length });
});

gsap.to(edges, {
  strokeDashoffset: 0,
  duration: 1.5,
  ease: "power2.inOut",
  stagger: 0.1, // Stagger drawing the edges
  scrollTrigger: {
    trigger: ".wireframe-section",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});
