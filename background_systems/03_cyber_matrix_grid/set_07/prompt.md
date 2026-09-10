# AI Background Prompt: Ghost Silver Wireframe (Cyber Matrix Grid)

```markdown
Implement the dedicated 'Ghost Silver Wireframe' atmospheric visual background using the 'grid_3d' engine.

Specifications:
- Visual Technique: grid_3d
- Module: Cyber Matrix Grid
- Base Color: #090d16
- Accent Color: #94a3b8
- Characteristics: True 3D perspective wireframe horizon ground grid moving forward towards the camera with glowing horizon.

CSS Tokens:
```css
:root {
  --bg-primary: #090d16;
  --bg-accent: #94a3b8;
  --bg-style-engine: 'grid_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
