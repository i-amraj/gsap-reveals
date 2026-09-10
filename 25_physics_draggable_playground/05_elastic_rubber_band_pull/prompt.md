# 🤖 AI Prompt: Elastic Rubber-Band Slingshot Pull (GSAP Draggable + SVG Splines)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create an interactive slingshot elastic cord interaction where pulling a draggable central orb deforms dynamic SVG bezier strings and snapping it creates an elastic spring twang oscillation using GSAP and Draggable.

### Requirements:
1. **Stage Setup**:
   - Two fixed anchor posts on opposite sides of the stage.
   - An SVG canvas containing two tension cord paths (`#leftCord`, `#rightCord`).
   - A central glowing draggable slingshot node.
   - Real-time tension percentage indicator (`0%` to `100%`).

2. **Dynamic Spline Deformation & Tension Mechanics (The Core Formula)**:
   - Make the central node draggable: `Draggable.create(core, { bounds: stage, type: "x,y" })`.
   - On `onDrag`:
     * Compute node coordinates `curX = originX + this.x`, `curY = originY + this.y`.
     * Update the quadratic bezier SVG path strings:
       `d = "M ${anchor.x} ${anchor.y} Q ${curX} ${curY}, ${curX} ${curY}"`.
     * Thin the cord stroke-width as tension displacement increases.
   - On `onRelease`:
     * Animate the core element back to origin `(0, 0)` using `ease: "elastic.out(1.2, 0.25)"`.
     * Simultaneously animate a dummy coordinate object with the same elastic ease in `onUpdate` to update the SVG cords synchronously, creating realistic physical string vibrations.
```
