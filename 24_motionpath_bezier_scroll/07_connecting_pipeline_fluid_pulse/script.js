// MotionPath 07: Branching Neural Pipeline Fluid Pulse with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);

  const stage = document.getElementById("circuitStage");
  const targetNodes = document.querySelectorAll(".target-node");
  const fireAllBtn = document.getElementById("fireAllBtn");

  const paths = {
    A: document.getElementById("pathBranchA"),
    B: document.getElementById("pathBranchB"),
    C: document.getElementById("pathBranchC")
  };

  // Pulse along a specific branch
  function firePulse(branchKey, color = "#06b6d4") {
    const targetPath = paths[branchKey];
    if (!targetPath) return;

    // Create ephemeral packet element
    const packet = document.createElement("div");
    packet.classList.add("energy-packet");
    packet.style.background = `radial-gradient(circle, #fff, ${color} 60%, transparent)`;
    packet.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}`;
    stage.appendChild(packet);

    // Highlight conduit stroke
    targetPath.classList.add("active");
    targetPath.style.stroke = color;

    gsap.fromTo(packet, 
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1.2, duration: 0.2 }
    );

    gsap.to(packet, {
      motionPath: {
        path: targetPath,
        align: targetPath,
        alignOrigin: [0.5, 0.5]
      },
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        // Explode on contact with destination node
        gsap.to(packet, {
          scale: 2,
          opacity: 0,
          duration: 0.25,
          onComplete: () => packet.remove()
        });

        // Flash destination node
        const destNode = document.querySelector(`.node-${branchKey.toLowerCase()}`);
        if (destNode) {
          gsap.fromTo(destNode, 
            { scale: 1.1, borderColor: color },
            { scale: 1, borderColor: "rgba(255, 255, 255, 0.15)", duration: 0.4 }
          );
        }

        setTimeout(() => {
          targetPath.classList.remove("active");
          targetPath.style.stroke = "";
        }, 300);
      }
    });
  }

  // Node click listeners
  targetNodes.forEach((node) => {
    node.addEventListener("click", () => {
      const branch = node.getAttribute("data-branch");
      firePulse(branch);
    });
  });

  // Broadcast burst to all branches
  fireAllBtn.addEventListener("click", () => {
    firePulse("A", "#8b5cf6");
    setTimeout(() => firePulse("B", "#06b6d4"), 150);
    setTimeout(() => firePulse("C", "#10b981"), 300);
  });

  // Continuous subtle heartbeat pulse
  setInterval(() => {
    const randomBranch = ["A", "B", "C"][Math.floor(Math.random() * 3)];
    firePulse(randomBranch);
  }, 2400);
});
