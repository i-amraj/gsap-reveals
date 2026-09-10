# AI Background Prompt: Acid Green Matrix Terminal (Cyber Matrix Grid)

```markdown
Implement the dedicated 'Acid Green Matrix Terminal' atmospheric visual background using the 'grid_3d' engine.

Specifications:
- Visual Technique: grid_3d
- Module: Cyber Matrix Grid
- Base Color: #022c22
- Accent Color: #22c55e
- Characteristics: True 3D perspective wireframe horizon ground grid moving forward towards the camera with glowing horizon.

CSS Tokens:
```css
:root {
  --bg-primary: #022c22;
  --bg-accent: #22c55e;
  --bg-style-engine: 'grid_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
