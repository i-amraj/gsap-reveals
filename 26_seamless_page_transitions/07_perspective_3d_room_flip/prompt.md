# 🤖 AI Prompt: 3D Perspective Room Cube Flip Transition (GSAP 3D)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Create a 3D perspective room flip transition where views rotate as faces of a physical 3D cube with depth translations using GSAP and CSS 3D transforms.

### Requirements:
1. **3D Scene Hierarchy**:
   - Outer container with `perspective: 1400px`.
   - Cube room wrapper with `transform-style: preserve-3d`.
   - Multiple faces positioned orthogonally:
     * Front face: `transform: translateZ(halfWidth)`.
     * Right face: `transform: rotateY(90deg) translateZ(halfWidth)`.
     * Faces have `backface-visibility: hidden`.

2. **GSAP Spatial Rotation Mechanics (The Core Formula)**:
   - On transition trigger:
     1. Pull the 3D room backward into the screen to preserve center-of-mass perspective: `gsap.to(room, { z: -250, duration: 0.45 })`.
     2. Rotate the room along the Y-axis: `gsap.to(room, { rotateY: -90, duration: 0.8, ease: "power3.inOut" })`.
     3. Settle the room forward back to `z: 0` as the destination face snaps squarely into focus.
```
