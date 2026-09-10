# AI Background Prompt: Emerald Isle & Deep Ink (Duotone Gradient Maps)

```markdown
Implement the dedicated 'Emerald Isle & Deep Ink' atmospheric visual background using the 'duotone_split' engine.

Specifications:
- Visual Technique: duotone_split
- Module: Duotone Gradient Maps
- Base Color: #020c0a
- Accent Color: #10b981
- Characteristics: High-contrast Swiss risograph dual-color gradient backdrop with diagonal split line and chromatic glow.

CSS Tokens:
```css
:root {
  --bg-primary: #020c0a;
  --bg-accent: #10b981;
  --bg-style-engine: 'duotone_split';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
