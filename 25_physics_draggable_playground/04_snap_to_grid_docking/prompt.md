# 🤖 AI Prompt: Magnetic Snap-to-Grid Docking Slots (GSAP Draggable)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an interactive hardware module docking interface where cards can be dragged and snapped magnetically into grid docking bays using GSAP and Draggable.

### Requirements:
1. **Layout**:
   - A docking stage area containing 4 designated target bays/slots.
   - 3 modular hardware cards (`NPU Core`, `Fiber Link`, `Crypto Enclave`).
   - Dashed slot boundaries that illuminate with a cyan glow when a card hovers nearby.

2. **GSAP Magnetic Snap Mechanics (The Core Formula)**:
   - Make cards draggable with `Draggable.create(mod, { bounds: stage, type: "x,y" })`.
   - On `onDrag`:
     * Calculate Euclidean distance from current dragged coordinates to each slot center:
       `dist = Math.hypot(this.x - slotCoords.x, this.y - slotCoords.y)`.
     * If within `snapThreshold` (140px), add `.highlight` class to the nearest slot.
   - On `onRelease`:
     * If the closest slot is unoccupied, claim it and animate into slot center with spring ease:
       `gsap.to(card, { x: slotCoords.x, y: slotCoords.y, ease: "elastic.out(1, 0.6)" })`.
     * If target slot is occupied or out of range, spring back to its previous home slot.
```
