// Physics 05: Elastic Rubber-Band Slingshot Pull with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable);

  const stage = document.getElementById("bandStage");
  const coreNode = document.getElementById("coreNode");
  const leftCord = document.getElementById("leftCord");
  const rightCord = document.getElementById("rightCord");
  const tensionVal = document.getElementById("tensionVal");

  const originX = 400;
  const originY = 225;
  const anchorLeft = { x: 100, y: 225 };
  const anchorRight = { x: 700, y: 225 };

  // Update SVG cord quadratic bezier paths
  function updateCords(currentX, currentY) {
    const leftPath = `M ${anchorLeft.x} ${anchorLeft.y} Q ${currentX} ${currentY}, ${currentX} ${currentY}`;
    const rightPath = `M ${anchorRight.x} ${anchorRight.y} Q ${currentX} ${currentY}, ${currentX} ${currentY}`;

    leftCord.setAttribute("d", leftPath);
    rightCord.setAttribute("d", rightPath);

    // Calculate displacement tension percentage
    const displacement = Math.hypot(currentX - originX, currentY - originY);
    const maxDisplacement = 250;
    const tensionPct = Math.min(100, Math.floor((displacement / maxDisplacement) * 100));
    tensionVal.textContent = `${tensionPct}%`;

    // Dynamic stroke width under tension
    const cordThickness = Math.max(1.5, 5 - (tensionPct / 100) * 3);
    leftCord.setAttribute("stroke-width", cordThickness);
    rightCord.setAttribute("stroke-width", cordThickness);
  }

  // Setup draggable core
  Draggable.create(coreNode, {
    bounds: stage,
    type: "x,y",
    onDrag: function() {
      const curX = originX + this.x;
      const curY = originY + this.y;
      updateCords(curX, curY);
    },
    onRelease: function() {
      // Elastic spring twang oscillation back to origin
      const currentObj = { x: originX + this.x, y: originY + this.y };

      gsap.to(this.target, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1.2, 0.25)"
      });

      gsap.to(currentObj, {
        x: originX,
        y: originY,
        duration: 1.2,
        ease: "elastic.out(1.2, 0.25)",
        onUpdate: () => {
          updateCords(currentObj.x, currentObj.y);
        }
      });
    }
  });

  updateCords(originX, originY);
});
