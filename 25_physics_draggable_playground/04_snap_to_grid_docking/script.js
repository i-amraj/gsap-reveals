// Physics 04: Magnetic Snap-to-Grid Docking Slots with GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Draggable);

  const stage = document.getElementById("dockingStage");
  const slots = document.querySelectorAll(".dock-slot");
  const modules = [
    document.getElementById("mod1"),
    document.getElementById("mod2"),
    document.getElementById("mod3")
  ];

  // Helper: get slot center coordinates relative to stage
  function getSlotCoordinates(slot) {
    const stageRect = stage.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();

    return {
      x: slotRect.left - stageRect.left,
      y: slotRect.top - stageRect.top
    };
  }

  // Snap threshold in pixels
  const snapThreshold = 140;

  // Track occupied slots
  const slotOccupancy = [null, null, null, null];

  // Place modules into initial slots on load
  modules.forEach((mod, i) => {
    const coords = getSlotCoordinates(slots[i]);
    gsap.set(mod, { x: coords.x, y: coords.y });
    slotOccupancy[i] = mod;
  });

  // Setup draggable
  modules.forEach((mod) => {
    let homeSlot = null;

    Draggable.create(mod, {
      bounds: stage,
      type: "x,y",
      onPress: function() {
        gsap.to(this.target, { scale: 1.04, duration: 0.15 });

        // Find current home slot
        homeSlot = slotOccupancy.indexOf(this.target);
        if (homeSlot !== -1) slotOccupancy[homeSlot] = null;
      },
      onDrag: function() {
        // Detect closest slot
        let closestSlot = null;
        let minDistance = Infinity;

        slots.forEach((slot, index) => {
          slot.classList.remove("highlight");
          const coords = getSlotCoordinates(slot);
          const dist = Math.hypot(this.x - coords.x, this.y - coords.y);

          if (dist < minDistance && dist < snapThreshold) {
            minDistance = dist;
            closestSlot = slot;
          }
        });

        if (closestSlot) closestSlot.classList.add("highlight");
      },
      onRelease: function() {
        slots.forEach(s => s.classList.remove("highlight"));

        let targetSlotIndex = -1;
        let minDistance = Infinity;

        slots.forEach((slot, index) => {
          const coords = getSlotCoordinates(slot);
          const dist = Math.hypot(this.x - coords.x, this.y - coords.y);

          if (dist < minDistance && dist < snapThreshold) {
            minDistance = dist;
            targetSlotIndex = index;
          }
        });

        // If target slot is available, snap there. Otherwise return home.
        if (targetSlotIndex !== -1 && !slotOccupancy[targetSlotIndex]) {
          const coords = getSlotCoordinates(slots[targetSlotIndex]);
          slotOccupancy[targetSlotIndex] = this.target;

          gsap.to(this.target, {
            x: coords.x,
            y: coords.y,
            scale: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.6)"
          });
        } else {
          // Snap back to home slot
          const fallbackIndex = homeSlot !== -1 ? homeSlot : 0;
          slotOccupancy[fallbackIndex] = this.target;
          const coords = getSlotCoordinates(slots[fallbackIndex]);

          gsap.to(this.target, {
            x: coords.x,
            y: coords.y,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
          });
        }
      }
    });
  });
});
