# 🤖 AI Prompt: Fluid Viscous Jelly Bubble Drag (Squash & Stretch Physics)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an organic gelatinous bubble interaction where dragging stretches and squashes the liquid blob along its velocity vector and releasing it triggers an elastic viscoelastic jiggle oscillation using GSAP and Draggable.

### Requirements:
1. **Fluid Bubble Styling**:
   - Spherical liquid orb with radial gradients, inner glow, and cyan-purple refraction.
   - Stage boundary preventing the bubble from escaping the container.

2. **Viscoelastic Kinematics (The Core Formula)**:
   - Apply `Draggable.create(bubble, { bounds: stage, type: "x,y" })`.
   - On `onDrag`:
     * Compute delta movement: `dx = this.x - lastX`, `dy = this.y - lastY`.
     * Calculate angle of motion: `angle = Math.atan2(dy, dx) * (180 / Math.PI)`.
     * Apply physical squash and stretch conserving area:
       `stretch = Math.min(1.45, 1 + dist * 0.015)`, `squash = 1 / stretch`.
     * Orient deformation along the velocity vector:
       `gsap.to(bubble, { scaleX: stretch, scaleY: squash, rotation: angle, duration: 0.1 })`.
   - On `onRelease`:
     * Restore spherical geometry with a high-frequency elastic jiggle:
       `gsap.to(bubble, { scaleX: 1, scaleY: 1, rotation: 0, duration: 1.4, ease: "elastic.out(1.6, 0.2)" })`.
```
