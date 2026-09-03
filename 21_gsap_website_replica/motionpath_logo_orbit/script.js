gsap.registerPlugin(MotionPathPlugin);

const satellites = gsap.utils.toArray(".satellite");

// Reveal satellites
gsap.set(satellites, { opacity: 1 });

// We want them equally spaced on the circle.
// So we animate each one infinitely, but offset their starting progress along the path.
satellites.forEach((sat, i) => {
  gsap.to(sat, {
    motionPath: {
      path: "#circle-path",
      align: "#circle-path",
      alignOrigin: [0.5, 0.5],
      start: i * 0.25, // 0, 0.25, 0.5, 0.75
      end: i * 0.25 + 1 // 1, 1.25, 1.5, 1.75
    },
    duration: 10,
    ease: "none",
    repeat: -1
  });
});

// Interactive hover to pause
satellites.forEach(sat => {
  sat.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
  sat.addEventListener("mouseleave", () => gsap.globalTimeline.play());
});
