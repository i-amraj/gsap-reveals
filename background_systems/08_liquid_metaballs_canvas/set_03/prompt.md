# AI Background Prompt: Molten Magma Core (Liquid Metaballs Canvas)

```markdown
Implement the dedicated 'Molten Magma Core' atmospheric visual background using the 'metaballs' engine.

Specifications:
- Visual Technique: metaballs
- Module: Liquid Metaballs Canvas
- Base Color: #170402
- Accent Color: #ef4444
- Characteristics: Real-time gooey liquid metaballs bouncing, coalescing, and dynamically pulling towards cursor gravity.

CSS Tokens:
```css
:root {
  --bg-primary: #170402;
  --bg-accent: #ef4444;
  --bg-style-engine: 'metaballs';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
