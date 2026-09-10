# AI Background Prompt: Dark Ink Ferrofluid (Liquid Metaballs Canvas)

```markdown
Implement the dedicated 'Dark Ink Ferrofluid' atmospheric visual background using the 'metaballs' engine.

Specifications:
- Visual Technique: metaballs
- Module: Liquid Metaballs Canvas
- Base Color: #050507
- Accent Color: #a1a1aa
- Characteristics: Real-time gooey liquid metaballs bouncing, coalescing, and dynamically pulling towards cursor gravity.

CSS Tokens:
```css
:root {
  --bg-primary: #050507;
  --bg-accent: #a1a1aa;
  --bg-style-engine: 'metaballs';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
