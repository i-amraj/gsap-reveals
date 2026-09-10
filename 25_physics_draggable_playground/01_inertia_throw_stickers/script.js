// Physics 01: Inertia Fling & Throw Stickers with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable);

  const stage = document.getElementById("tableStage");
  const stickers = document.querySelectorAll(".sticker");
  const resetBtn = document.getElementById("resetBtn");

  const initialPositions = [
    { x: 0, y: 0, rot: -6 },
    { x: 0, y: 0, rot: 4 },
    { x: 0, y: 0, rot: -8 },
    { x: 0, y: 0, rot: 12 },
    { x: 0, y: 0, rot: -3 }
  ];

  // Set initial tilts
  stickers.forEach((sticker, i) => {
    gsap.set(sticker, { rotation: initialPositions[i].rot });
  });

  // Setup Draggable with custom inertia velocity throw
  stickers.forEach((sticker) => {
    let lastX = 0;
    let lastY = 0;
    let vx = 0;
    let vy = 0;
    let lastTime = 0;

    Draggable.create(sticker, {
      bounds: stage,
      edgeResistance: 0.85,
      type: "x,y",
      onPress: function() {
        // Bring to front
        stickers.forEach(s => s.style.zIndex = "10");
        this.target.style.zIndex = "50";

        gsap.to(this.target, {
          scale: 1.12,
          rotation: "+=4",
          boxShadow: "0 25px 50px -5px rgba(0, 0, 0, 0.8)",
          duration: 0.15
        });

        lastX = this.x;
        lastY = this.y;
        lastTime = Date.now();
        vx = 0;
        vy = 0;
      },
      onDrag: function() {
        const now = Date.now();
        const dt = (now - lastTime) / 1000 || 0.016;
        vx = (this.x - lastX) / dt;
        vy = (this.y - lastY) / dt;

        lastX = this.x;
        lastY = this.y;
        lastTime = now;
      },
      onRelease: function() {
        // Momentum throw calculation
        const speed = Math.sqrt(vx * vx + vy * vy);
        const maxSpeed = 1500;
        const clampedSpeed = Math.min(speed, maxSpeed);
        const friction = 0.92;

        const throwX = this.x + (vx * 0.15);
        const throwY = this.y + (vy * 0.15);
        const spin = (vx * 0.04); // Rotate based on lateral throw direction

        const bounds = stage.getBoundingClientRect();
        const stickerRect = this.target.getBoundingClientRect();

        // Calculate clamped final target within stage bounds
        const minX = 0;
        const maxX = bounds.width - stickerRect.width;
        const minY = 0;
        const maxY = bounds.height - stickerRect.height;

        const finalX = Math.max(minX, Math.min(maxX, throwX));
        const finalY = Math.max(minY, Math.min(maxY, throwY));

        gsap.to(this.target, {
          x: finalX,
          y: finalY,
          rotation: `+=${spin}`,
          scale: 1,
          duration: Math.min(1.2, 0.4 + clampedSpeed / 1000),
          ease: "power3.out"
        });
      }
    });
  });

  // Reset button gathers stickers back to center
  resetBtn.addEventListener("click", () => {
    stickers.forEach((sticker, i) => {
      gsap.to(sticker, {
        x: 0,
        y: 0,
        rotation: initialPositions[i].rot,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
});
