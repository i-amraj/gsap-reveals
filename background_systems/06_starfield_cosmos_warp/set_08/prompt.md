# AI Background Prompt: Hyperspace Jump Overdrive (Starfield Cosmos Warp)

```markdown
Implement the dedicated 'Hyperspace Jump Overdrive' atmospheric visual background using the 'warp_stars' engine.

Specifications:
- Visual Technique: warp_stars
- Module: Starfield Cosmos Warp
- Base Color: #010610
- Accent Color: #22d3ee
- Characteristics: 3D warp speed hyperspace starfield flying outward from center with speed streaking and mouse steering.

CSS Tokens:
```css
:root {
  --bg-primary: #010610;
  --bg-accent: #22d3ee;
  --bg-style-engine: 'warp_stars';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
