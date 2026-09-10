// MotionPath 02: Auto-Orient Rollercoaster Cards with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const cards = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4")
  ];

  const coasterPath = document.getElementById("coasterPath");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#trackWrapper",
      start: "top 25%",
      end: "bottom 95%",
      scrub: 1.5
    }
  });

  // Stagger each card along the path with a phase offset
  cards.forEach((card, index) => {
    const offset = index * 0.12; // Gap between cards

    tl.to(card, {
      motionPath: {
        path: "#coasterPath",
        align: "#coasterPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: offset,
        end: 0.65 + offset
      },
      ease: "none"
    }, 0);
  });
});
