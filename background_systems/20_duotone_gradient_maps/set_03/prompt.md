# AI Background Prompt: Acid Lime & Dark Plum (Duotone Gradient Maps)

```markdown
Implement the dedicated 'Acid Lime & Dark Plum' atmospheric visual background using the 'duotone_split' engine.

Specifications:
- Visual Technique: duotone_split
- Module: Duotone Gradient Maps
- Base Color: #0a0212
- Accent Color: #a3e635
- Characteristics: High-contrast Swiss risograph dual-color gradient backdrop with diagonal split line and chromatic glow.

CSS Tokens:
```css
:root {
  --bg-primary: #0a0212;
  --bg-accent: #a3e635;
  --bg-style-engine: 'duotone_split';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
