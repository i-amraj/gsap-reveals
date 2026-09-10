# AI Background Prompt: Radical Acid Matrix Dots (Dot Matrix Blueprint)

```markdown
Implement the dedicated 'Radical Acid Matrix Dots' atmospheric visual background using the 'dot_matrix' engine.

Specifications:
- Visual Technique: dot_matrix
- Module: Dot Matrix Blueprint
- Base Color: #011206
- Accent Color: #22c55e
- Characteristics: Precision architectural dot matrix grid where dots elastically repel away from mouse cursor and light up.

CSS Tokens:
```css
:root {
  --bg-primary: #011206;
  --bg-accent: #22c55e;
  --bg-style-engine: 'dot_matrix';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
