# AI Background Prompt: Azure Pool Caustics (Volumetric Caustic Refraction)

```markdown
Implement the dedicated 'Azure Pool Caustics' atmospheric visual background using the 'water_caustics' engine.

Specifications:
- Visual Technique: water_caustics
- Module: Volumetric Caustic Refraction
- Base Color: #021226
- Accent Color: #38bdf8
- Characteristics: Swimming pool volumetric light caustics shimmering and undulating with dynamic water ripple refraction.

CSS Tokens:
```css
:root {
  --bg-primary: #021226;
  --bg-accent: #38bdf8;
  --bg-style-engine: 'water_caustics';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
