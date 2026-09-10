# AI Background Prompt: Deep Blood Wireframe (Cyber Matrix Grid)

```markdown
Implement the dedicated 'Deep Blood Wireframe' atmospheric visual background using the 'grid_3d' engine.

Specifications:
- Visual Technique: grid_3d
- Module: Cyber Matrix Grid
- Base Color: #1a0505
- Accent Color: #ef4444
- Characteristics: True 3D perspective wireframe horizon ground grid moving forward towards the camera with glowing horizon.

CSS Tokens:
```css
:root {
  --bg-primary: #1a0505;
  --bg-accent: #ef4444;
  --bg-style-engine: 'grid_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
