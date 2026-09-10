# AI Background Prompt: Cyber Prismatic Glare (Holographic Prismatic Foil)

```markdown
Implement the dedicated 'Cyber Prismatic Glare' atmospheric visual background using the 'holo_foil' engine.

Specifications:
- Visual Technique: holo_foil
- Module: Holographic Prismatic Foil
- Base Color: #020c14
- Accent Color: #38bdf8
- Characteristics: Angle-reactive liquid metallic rainbow sheen reflecting across full spectrum as mouse moves.

CSS Tokens:
```css
:root {
  --bg-primary: #020c14;
  --bg-accent: #38bdf8;
  --bg-style-engine: 'holo_foil';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
