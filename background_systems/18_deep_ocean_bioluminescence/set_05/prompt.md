# AI Background Prompt: Electric Aqua Abyss (Deep Ocean Bioluminescence)

```markdown
Implement the dedicated 'Electric Aqua Abyss' atmospheric visual background using the 'bioluminescence' engine.

Specifications:
- Visual Technique: bioluminescence
- Module: Deep Ocean Bioluminescence
- Base Color: #010912
- Accent Color: #06b6d4
- Characteristics: Underwater caustics sunlight rays shimmering on seafloor with floating pulsating bioluminescent medusa.

CSS Tokens:
```css
:root {
  --bg-primary: #010912;
  --bg-accent: #06b6d4;
  --bg-style-engine: 'bioluminescence';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
