// MotionPath 05: Luminescent Multi-Particle Orbit Swarm with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);

  const container = document.getElementById("particlesContainer");
  const path = document.getElementById("infinityPath");
  const speedBtns = document.querySelectorAll(".speed-btn");

  const colors = ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#38bdf8"];
  const totalParticles = 36;
  const masterTweens = [];

  // Create particles
  for (let i = 0; i < totalParticles; i++) {
    const p = document.createElement("div");
    p.classList.add("swarm-particle");

    const size = Math.random() * 8 + 4; // 4px to 12px
    const color = colors[i % colors.length];

    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.background = color;
    p.style.boxShadow = `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`;

    container.appendChild(p);

    // Stagger along 0 to 1 on closed loop
    const startProgress = i / totalParticles;
    const baseDuration = 6;

    const tween = gsap.to(p, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        start: startProgress,
        end: startProgress + 1
      },
      duration: baseDuration,
      repeat: -1,
      ease: "none"
    });

    // Add scale pulse
    gsap.to(p, {
      scale: 1.5,
      duration: 1.2 + Math.random(),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    masterTweens.push(tween);
  }

  // Velocity controls
  speedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      speedBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const speed = parseFloat(btn.getAttribute("data-speed")) || 1;
      masterTweens.forEach(tw => tw.timeScale(speed));
    });
  });
});
