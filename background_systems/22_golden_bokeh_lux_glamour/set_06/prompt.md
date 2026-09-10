# AI Background Prompt: Amethyst Royal Night (Golden Bokeh Luxe Glamour)

```markdown
Implement the dedicated 'Amethyst Royal Night' atmospheric visual background using the 'bokeh_orbs' engine.

Specifications:
- Visual Technique: bokeh_orbs
- Module: Golden Bokeh Luxe Glamour
- Base Color: #0a0316
- Accent Color: #d8b4fe
- Characteristics: Large soft out-of-focus champagne bokeh discs with bright rim highlights drifting with camera depth of field.

CSS Tokens:
```css
:root {
  --bg-primary: #0a0316;
  --bg-accent: #d8b4fe;
  --bg-style-engine: 'bokeh_orbs';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
