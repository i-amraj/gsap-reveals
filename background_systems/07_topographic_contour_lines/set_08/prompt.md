# AI Background Prompt: Sonar Trench Depth Lines (Topographic Contour Lines)

```markdown
Implement the dedicated 'Sonar Trench Depth Lines' atmospheric visual background using the 'contour' engine.

Specifications:
- Visual Technique: contour
- Module: Topographic Contour Lines
- Base Color: #021715
- Accent Color: #2dd4bf
- Characteristics: Flowing elevation terrain contour maps undulating dynamically with multi-frequency sine wave geometry.

CSS Tokens:
```css
:root {
  --bg-primary: #021715;
  --bg-accent: #2dd4bf;
  --bg-style-engine: 'contour';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
