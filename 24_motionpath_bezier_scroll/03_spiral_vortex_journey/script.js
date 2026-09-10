// MotionPath 03: 3D Spiral Vortex Journey with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const nodes = [
    document.getElementById("node1"),
    document.getElementById("node2"),
    document.getElementById("node3")
  ];

  const spiralPath = document.getElementById("spiralPath");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#vortexStage",
      start: "top 20%",
      end: "bottom 90%",
      scrub: 1.2
    }
  });

  // Animate path stroke drawing
  const pathLength = spiralPath.getTotalLength();
  gsap.set(spiralPath, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength
  });

  tl.to(spiralPath, {
    strokeDashoffset: 0,
    ease: "none"
  }, 0);

  // Animate space nodes through vortex with 3D scale zoom
  nodes.forEach((node, i) => {
    const offset = i * 0.18;

    tl.fromTo(node, 
      { scale: 0.1, opacity: 0 },
      {
        scale: 1.3,
        opacity: 1,
        motionPath: {
          path: "#spiralPath",
          align: "#spiralPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: offset,
          end: Math.min(1, 0.65 + offset)
        },
        ease: "power1.in",
        duration: 1
      }, 
      0
    );
  });
});
