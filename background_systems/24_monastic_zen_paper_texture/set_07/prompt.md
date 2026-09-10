# AI Background Prompt: Indigo Dye Cotton Cloth (Monastic Zen Paper Texture)

```markdown
Implement the dedicated 'Indigo Dye Cotton Cloth' atmospheric visual background using the 'zen_ink_paper' engine.

Specifications:
- Visual Technique: zen_ink_paper
- Module: Monastic Zen Paper Texture
- Base Color: #0c1322
- Accent Color: #38bdf8
- Characteristics: Japanese mulberry washi paper fiber grain with interactive sumi-e ink drop ripples expanding on interaction.

CSS Tokens:
```css
:root {
  --bg-primary: #0c1322;
  --bg-accent: #38bdf8;
  --bg-style-engine: 'zen_ink_paper';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
