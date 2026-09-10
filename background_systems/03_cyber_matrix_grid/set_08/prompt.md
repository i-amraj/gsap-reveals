# AI Background Prompt: Ultra-Violet Cyber Highway (Cyber Matrix Grid)

```markdown
Implement the dedicated 'Ultra-Violet Cyber Highway' atmospheric visual background using the 'grid_3d' engine.

Specifications:
- Visual Technique: grid_3d
- Module: Cyber Matrix Grid
- Base Color: #0b0314
- Accent Color: #a855f7
- Characteristics: True 3D perspective wireframe horizon ground grid moving forward towards the camera with glowing horizon.

CSS Tokens:
```css
:root {
  --bg-primary: #0b0314;
  --bg-accent: #a855f7;
  --bg-style-engine: 'grid_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
