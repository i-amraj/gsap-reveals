# AI Background Prompt: Acid Club Vapor (Smoke & Fluid Fog)

```markdown
Implement the dedicated 'Acid Club Vapor' atmospheric visual background using the 'smoke_fog' engine.

Specifications:
- Visual Technique: smoke_fog
- Module: Smoke & Fluid Fog
- Base Color: #061302
- Accent Color: #a3e635
- Characteristics: Volumetric billowing smoke clouds and soft ground mist drifting lazily with realistic opacity falloff.

CSS Tokens:
```css
:root {
  --bg-primary: #061302;
  --bg-accent: #a3e635;
  --bg-style-engine: 'smoke_fog';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
