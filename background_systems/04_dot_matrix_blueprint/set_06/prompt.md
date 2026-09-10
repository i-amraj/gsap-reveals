# AI Background Prompt: Electric Purple Nodes (Dot Matrix Blueprint)

```markdown
Implement the dedicated 'Electric Purple Nodes' atmospheric visual background using the 'dot_matrix' engine.

Specifications:
- Visual Technique: dot_matrix
- Module: Dot Matrix Blueprint
- Base Color: #080210
- Accent Color: #a855f7
- Characteristics: Precision architectural dot matrix grid where dots elastically repel away from mouse cursor and light up.

CSS Tokens:
```css
:root {
  --bg-primary: #080210;
  --bg-accent: #a855f7;
  --bg-style-engine: 'dot_matrix';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
