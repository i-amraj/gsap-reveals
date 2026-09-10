# AI Background Prompt: Champagne Diamond Spark (Golden Bokeh Luxe Glamour)

```markdown
Implement the dedicated 'Champagne Diamond Spark' atmospheric visual background using the 'bokeh_orbs' engine.

Specifications:
- Visual Technique: bokeh_orbs
- Module: Golden Bokeh Luxe Glamour
- Base Color: #100c02
- Accent Color: #fde047
- Characteristics: Large soft out-of-focus champagne bokeh discs with bright rim highlights drifting with camera depth of field.

CSS Tokens:
```css
:root {
  --bg-primary: #100c02;
  --bg-accent: #fde047;
  --bg-style-engine: 'bokeh_orbs';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
