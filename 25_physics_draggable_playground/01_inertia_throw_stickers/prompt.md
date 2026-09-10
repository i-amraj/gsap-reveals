# 🤖 AI Prompt: Inertia Fling & Throw Stickers Playground (GSAP Draggable)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a playful, tactile sticker fling playground where cards/stickers can be grabbed and thrown across the canvas with momentum and spin physics using GSAP Draggable.

### Requirements:
1. **Playground Stage**:
   - A dark metallic/canvas stage area with subtle grid lines.
   - 5 colorful, high-contrast stickers (gradients in purple, cyan, pink, emerald, amber) with bold text and emojis.
   - Initial randomized rotation angles (-8° to 12°).

2. **GSAP Velocity & Momentum Fling Mechanics (The Core Formula)**:
   - Use `Draggable.create(sticker, { bounds: stage, edgeResistance: 0.85, type: "x,y" })`.
   - On `onPress`: Elevate z-index, scale sticker up (`scale: 1.12`), and initiate velocity tracking.
   - On `onDrag`: Calculate instantaneous velocity vectors `vx = (x - lastX) / dt`, `vy = (y - lastY) / dt`.
   - On `onRelease`: 
     * Compute throw distance `throwX = x + (vx * 0.15)`, `throwY = y + (vy * 0.15)`.
     * Add rotational spin based on lateral velocity: `spin = vx * 0.04`.
     * Clamp final position within parent stage bounds.
     * Animate with `gsap.to(target, { x: finalX, y: finalY, rotation: "+=" + spin, ease: "power3.out" })`.

3. **Gather / Reset Interaction**:
   - Provide a "Gather All Stickers" button that animates all stickers back to original slots with an elastic spring ease (`elastic.out(1, 0.5)`).
```
