// Physics 07: Fluid Viscous Jelly Bubble Drag with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable);

  const stage = document.getElementById("fluidStage");
  const bubble = document.getElementById("jellyBubble");

  let lastX = 0;
  let lastY = 0;

  Draggable.create(bubble, {
    bounds: stage,
    type: "x,y",
    onPress: function() {
      lastX = this.x;
      lastY = this.y;
    },
    onDrag: function() {
      const dx = this.x - lastX;
      const dy = this.y - lastY;
      const dist = Math.hypot(dx, dy);

      // Angle of travel
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Viscous squash and stretch
      const stretch = Math.min(1.45, 1 + dist * 0.015);
      const squash = 1 / stretch;

      gsap.to(this.target, {
        scaleX: stretch,
        scaleY: squash,
        rotation: angle,
        duration: 0.1,
        overwrite: "auto"
      });

      lastX = this.x;
      lastY = this.y;
    },
    onRelease: function() {
      // Viscoelastic jelly jiggle oscillation back to spherical shape
      gsap.to(this.target, {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        duration: 1.4,
        ease: "elastic.out(1.6, 0.2)",
        overwrite: "auto"
      });
    }
  });
});
