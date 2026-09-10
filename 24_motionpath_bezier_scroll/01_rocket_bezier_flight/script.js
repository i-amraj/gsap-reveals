// MotionPath 01: Rocket Bezier Flight Scrub with GSAP MotionPathPlugin
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const rocket = document.getElementById("rocket");
  const flightPath = document.getElementById("flightPath");
  const waypoints = document.querySelectorAll(".waypoint");

  // Animate SVG path stroke dashoffset drawing on scroll
  const pathLength = flightPath.getTotalLength();
  gsap.set(flightPath, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength
  });

  // Master scrub timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#flightSection",
      start: "top 20%",
      end: "bottom 90%",
      scrub: 1.2
    }
  });

  // 1. Draw glowing path along with scroll
  tl.to(flightPath, {
    strokeDashoffset: 0,
    ease: "none"
  }, 0);

  // 2. Fly rocket along bezier curve with auto-orientation
  tl.to(rocket, {
    motionPath: {
      path: "#flightPath",
      align: "#flightPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: 90 // Aligns nose to path tangent
    },
    ease: "none"
  }, 0);

  // Highlight waypoints when reached
  waypoints.forEach((wp, index) => {
    ScrollTrigger.create({
      trigger: wp,
      start: "top 65%",
      end: "bottom 35%",
      onEnter: () => wp.classList.add("is-active"),
      onLeave: () => wp.classList.remove("is-active"),
      onEnterBack: () => wp.classList.add("is-active"),
      onLeaveBack: () => wp.classList.remove("is-active")
    });
  });
});
