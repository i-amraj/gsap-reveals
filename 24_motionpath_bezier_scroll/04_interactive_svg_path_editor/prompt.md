# 🤖 AI Prompt: Interactive Real-Time Bezier Path Editor (GSAP Draggable + MotionPath)

Copy and paste this prompt into your AI assistant to replicate or adapt this effect in your project:

```markdown
Build an interactive real-time SVG Bezier path editor using GSAP Draggable and MotionPathPlugin.

### Requirements:
1. **Interactive Stage & Control Points**:
   - An SVG viewport displaying a cubic Bezier curve (`M P0.x P0.y C C1.x C1.y, C2.x C2.y, P3.x P3.y`).
   - 4 draggable control handle nodes (P0 Start, C1 Handle, C2 Handle, P3 End) bound within the stage container.
   - Dashed helper connector lines between endpoints and their respective control handles.
   - An animated glowing orb particle that continuously travels along the path.

2. **Real-Time Drag & Retargeting Engine (The Core Mechanics)**:
   - Use `Draggable.create(handle, { bounds: stage, onDrag: ... })` to track handle coordinates.
   - On every drag event:
     1. Recompute the SVG path string:
        `d = M ${points[0].x} ${points[0].y} C ${points[1].x} ${points[1].y}, ${points[2].x} ${points[2].y}, ${points[3].x} ${points[3].y}`
     2. Update the SVG `<path>` element and the helper dashed lines.
     3. Kill and immediately restart the `motionPath` tween on the traveling orb along the new curve:
        ```javascript
        orbTween = gsap.to(orb, {
          motionPath: { path: curve, align: curve, alignOrigin: [0.5, 0.5] },
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
        ```

3. **SVG String Export**:
   - Display the real-time generated SVG `d` code snippet in a monospace code bar with a 1-click "Copy Path" button.
```
