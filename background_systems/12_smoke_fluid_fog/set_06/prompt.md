# AI Background Prompt: Crimson Smolder Ash (Smoke & Fluid Fog)

```markdown
Implement the dedicated 'Crimson Smolder Ash' atmospheric visual background using the 'smoke_fog' engine.

Specifications:
- Visual Technique: smoke_fog
- Module: Smoke & Fluid Fog
- Base Color: #140305
- Accent Color: #f87171
- Characteristics: Volumetric billowing smoke clouds and soft ground mist drifting lazily with realistic opacity falloff.

CSS Tokens:
```css
:root {
  --bg-primary: #140305;
  --bg-accent: #f87171;
  --bg-style-engine: 'smoke_fog';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
