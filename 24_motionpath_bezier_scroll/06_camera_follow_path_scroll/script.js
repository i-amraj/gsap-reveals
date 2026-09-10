// MotionPath 06: Drone Camera Flight Scroll Viewport with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const worldLayer = document.getElementById("worldLayer");
  const cameraPath = document.getElementById("cameraPath");
  const hudAlt = document.getElementById("hudAlt");
  const hudSpeed = document.getElementById("hudSpeed");
  const hudHeading = document.getElementById("hudHeading");

  // Inverted path traversal to simulate camera following path
  gsap.to(worldLayer, {
    scrollTrigger: {
      trigger: "#viewportStage",
      start: "top 15%",
      end: "bottom 85%",
      scrub: 1.2,
      onUpdate: (self) => {
        const p = self.progress;
        // Dynamic simulated telemetry calculations
        const altitude = Math.floor(1240 + Math.sin(p * Math.PI) * 450);
        const speed = Math.floor(420 + p * 85);
        const heading = Math.floor((184 + p * 120) % 360);

        hudAlt.textContent = `${altitude.toLocaleString()}m`;
        hudSpeed.textContent = `${speed}km/h`;
        hudHeading.textContent = `${heading}°`;
      }
    },
    motionPath: {
      path: "#cameraPath",
      align: "#cameraPath",
      alignOrigin: [0.5, 0.5]
    },
    ease: "none"
  });
});
