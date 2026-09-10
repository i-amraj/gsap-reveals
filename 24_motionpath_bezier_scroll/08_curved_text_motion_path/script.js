// MotionPath 08: Curved Kinetic Wave Typography with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const words = document.querySelectorAll(".wave-word");
  const wavePath = document.getElementById("wavePath");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#waveStage",
      start: "top 20%",
      end: "bottom 90%",
      scrub: 1.5
    }
  });

  const totalWords = words.length;
  const wordSpacing = 0.085; // Space along curve progression

  words.forEach((word, index) => {
    const startProgress = index * wordSpacing;

    tl.fromTo(word, 
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        motionPath: {
          path: "#wavePath",
          align: "#wavePath",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: startProgress,
          end: Math.min(1, 0.55 + startProgress)
        },
        duration: 1,
        ease: "none"
      },
      0
    );
  });
});
