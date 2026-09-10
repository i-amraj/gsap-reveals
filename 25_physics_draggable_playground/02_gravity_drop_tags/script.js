// Physics 02: Gravitational Cascade Tags Drop with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable);

  const stage = document.getElementById("stage");
  const dropBtn = document.getElementById("dropBtn");

  const tagsData = [
    { label: "GSAP 3.12", color: "rgba(136, 206, 2, 0.25)", border: "#88ce02" },
    { label: "WebGL 2.0", color: "rgba(139, 92, 246, 0.25)", border: "#8b5cf6" },
    { label: "Three.js", color: "rgba(6, 182, 212, 0.25)", border: "#06b6d4" },
    { label: "TypeScript", color: "rgba(59, 130, 246, 0.25)", border: "#3b82f6" },
    { label: "CSS Grid", color: "rgba(236, 72, 153, 0.25)", border: "#ec4899" },
    { label: "MotionPath", color: "rgba(16, 185, 129, 0.25)", border: "#10b981" },
    { label: "Next.js", color: "rgba(255, 255, 255, 0.2)", border: "#ffffff" },
    { label: "ScrollTrigger", color: "rgba(245, 158, 11, 0.25)", border: "#f59e0b" }
  ];

  function runDrop() {
    // Clear old tags
    document.querySelectorAll(".physics-tag").forEach(el => el.remove());

    const stageWidth = stage.clientWidth;
    const groundY = 440; // Floor line

    tagsData.forEach((tag, index) => {
      const el = document.createElement("div");
      el.classList.add("physics-tag");
      el.textContent = tag.label;
      el.style.backgroundColor = tag.color;
      el.style.borderColor = tag.border;

      stage.appendChild(el);

      // Random horizontal drop origin
      const startX = stageWidth * 0.15 + (Math.random() * (stageWidth * 0.7));
      const startY = -60;

      // Settle targets on the floor with heaps
      const targetX = startX + (Math.random() - 0.5) * 80;
      const targetY = groundY - 15 - (Math.random() * 30);
      const targetRot = (Math.random() - 0.5) * 45; // Land tilted

      gsap.set(el, { x: startX, y: startY, rotation: (Math.random() - 0.5) * 90 });

      // Gravitational acceleration and multi-bounce settling
      gsap.to(el, {
        y: targetY,
        x: targetX,
        rotation: targetRot,
        duration: 1.2 + Math.random() * 0.4,
        delay: index * 0.08,
        ease: "bounce.out",
        onComplete: () => {
          // Enable dragging once landed
          Draggable.create(el, {
            bounds: stage,
            edgeResistance: 0.8,
            type: "x,y"
          });
        }
      });
    });
  }

  runDrop();

  dropBtn.addEventListener("click", runDrop);
});
