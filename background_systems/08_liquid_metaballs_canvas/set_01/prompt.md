# AI Background Prompt: Electric Violet Mercury (Liquid Metaballs Canvas)

```markdown
Implement the dedicated 'Electric Violet Mercury' atmospheric visual background using the 'metaballs' engine.

Specifications:
- Visual Technique: metaballs
- Module: Liquid Metaballs Canvas
- Base Color: #090514
- Accent Color: #8b5cf6
- Characteristics: Real-time gooey liquid metaballs bouncing, coalescing, and dynamically pulling towards cursor gravity.

CSS Tokens:
```css
:root {
  --bg-primary: #090514;
  --bg-accent: #8b5cf6;
  --bg-style-engine: 'metaballs';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
