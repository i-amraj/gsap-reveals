# AI Background Prompt: Cyber Gold Topography (Topographic Contour Lines)

```markdown
Implement the dedicated 'Cyber Gold Topography' atmospheric visual background using the 'contour' engine.

Specifications:
- Visual Technique: contour
- Module: Topographic Contour Lines
- Base Color: #141002
- Accent Color: #facc15
- Characteristics: Flowing elevation terrain contour maps undulating dynamically with multi-frequency sine wave geometry.

CSS Tokens:
```css
:root {
  --bg-primary: #141002;
  --bg-accent: #facc15;
  --bg-style-engine: 'contour';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
