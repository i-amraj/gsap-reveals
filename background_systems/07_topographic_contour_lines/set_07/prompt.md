# AI Background Prompt: Amethyst Peak Map (Topographic Contour Lines)

```markdown
Implement the dedicated 'Amethyst Peak Map' atmospheric visual background using the 'contour' engine.

Specifications:
- Visual Technique: contour
- Module: Topographic Contour Lines
- Base Color: #0e0417
- Accent Color: #c084fc
- Characteristics: Flowing elevation terrain contour maps undulating dynamically with multi-frequency sine wave geometry.

CSS Tokens:
```css
:root {
  --bg-primary: #0e0417;
  --bg-accent: #c084fc;
  --bg-style-engine: 'contour';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
