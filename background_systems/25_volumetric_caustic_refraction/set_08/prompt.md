# AI Background Prompt: Cyber Aqua Prism Caustic (Volumetric Caustic Refraction)

```markdown
Implement the dedicated 'Cyber Aqua Prism Caustic' atmospheric visual background using the 'water_caustics' engine.

Specifications:
- Visual Technique: water_caustics
- Module: Volumetric Caustic Refraction
- Base Color: #020f18
- Accent Color: #06b6d4
- Characteristics: Swimming pool volumetric light caustics shimmering and undulating with dynamic water ripple refraction.

CSS Tokens:
```css
:root {
  --bg-primary: #020f18;
  --bg-accent: #06b6d4;
  --bg-style-engine: 'water_caustics';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
