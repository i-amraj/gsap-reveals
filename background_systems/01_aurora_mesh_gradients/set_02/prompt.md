# AI Background Prompt: Cosmic Violet Dusk (Aurora Mesh Gradients)

```markdown
Implement the dedicated 'Cosmic Violet Dusk' atmospheric visual background using the 'aurora' engine.

Specifications:
- Visual Technique: aurora
- Module: Aurora Mesh Gradients
- Base Color: #0b081d
- Accent Color: #c084fc
- Characteristics: Fluid blurred radial gradient blobs with multi-point organic drift and iridescent color blending.

CSS Tokens:
```css
:root {
  --bg-primary: #0b081d;
  --bg-accent: #c084fc;
  --bg-style-engine: 'aurora';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
