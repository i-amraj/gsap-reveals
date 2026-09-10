# AI Background Prompt: Miami Sunset Outrun (Retro 80s Synth Horizon)

```markdown
Implement the dedicated 'Miami Sunset Outrun' atmospheric visual background using the 'synthwave_sun' engine.

Specifications:
- Visual Technique: synthwave_sun
- Module: Retro 80s Synth Horizon
- Base Color: #13021c
- Accent Color: #ec4899
- Characteristics: Outrun striped glowing neon sun dipping into horizon with 3D undulating wireframe mountain valley.

CSS Tokens:
```css
:root {
  --bg-primary: #13021c;
  --bg-accent: #ec4899;
  --bg-style-engine: 'synthwave_sun';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
