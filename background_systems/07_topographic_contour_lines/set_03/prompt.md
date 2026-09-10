# AI Background Prompt: Nordic Glacial Isobars (Topographic Contour Lines)

```markdown
Implement the dedicated 'Nordic Glacial Isobars' atmospheric visual background using the 'contour' engine.

Specifications:
- Visual Technique: contour
- Module: Topographic Contour Lines
- Base Color: #02101a
- Accent Color: #67e8f9
- Characteristics: Flowing elevation terrain contour maps undulating dynamically with multi-frequency sine wave geometry.

CSS Tokens:
```css
:root {
  --bg-primary: #02101a;
  --bg-accent: #67e8f9;
  --bg-style-engine: 'contour';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
