# AI Background Prompt: Midnight Emerald Drift (Deep Ocean Bioluminescence)

```markdown
Implement the dedicated 'Midnight Emerald Drift' atmospheric visual background using the 'bioluminescence' engine.

Specifications:
- Visual Technique: bioluminescence
- Module: Deep Ocean Bioluminescence
- Base Color: #01140c
- Accent Color: #34d399
- Characteristics: Underwater caustics sunlight rays shimmering on seafloor with floating pulsating bioluminescent medusa.

CSS Tokens:
```css
:root {
  --bg-primary: #01140c;
  --bg-accent: #34d399;
  --bg-style-engine: 'bioluminescence';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
