# AI Background Prompt: Fintech Navy Blueprint (Dot Matrix Blueprint)

```markdown
Implement the dedicated 'Fintech Navy Blueprint' atmospheric visual background using the 'dot_matrix' engine.

Specifications:
- Visual Technique: dot_matrix
- Module: Dot Matrix Blueprint
- Base Color: #02091c
- Accent Color: #3b82f6
- Characteristics: Precision architectural dot matrix grid where dots elastically repel away from mouse cursor and light up.

CSS Tokens:
```css
:root {
  --bg-primary: #02091c;
  --bg-accent: #3b82f6;
  --bg-style-engine: 'dot_matrix';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
