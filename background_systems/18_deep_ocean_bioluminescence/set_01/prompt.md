# AI Background Prompt: Mariana Bioluminescent Blue (Deep Ocean Bioluminescence)

```markdown
Implement the dedicated 'Mariana Bioluminescent Blue' atmospheric visual background using the 'bioluminescence' engine.

Specifications:
- Visual Technique: bioluminescence
- Module: Deep Ocean Bioluminescence
- Base Color: #020b18
- Accent Color: #38bdf8
- Characteristics: Underwater caustics sunlight rays shimmering on seafloor with floating pulsating bioluminescent medusa.

CSS Tokens:
```css
:root {
  --bg-primary: #020b18;
  --bg-accent: #38bdf8;
  --bg-style-engine: 'bioluminescence';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
