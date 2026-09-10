# AI Background Prompt: Minimal Monochrome Dust (Starfield Cosmos Warp)

```markdown
Implement the dedicated 'Minimal Monochrome Dust' atmospheric visual background using the 'warp_stars' engine.

Specifications:
- Visual Technique: warp_stars
- Module: Starfield Cosmos Warp
- Base Color: #08090c
- Accent Color: #94a3b8
- Characteristics: 3D warp speed hyperspace starfield flying outward from center with speed streaking and mouse steering.

CSS Tokens:
```css
:root {
  --bg-primary: #08090c;
  --bg-accent: #94a3b8;
  --bg-style-engine: 'warp_stars';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
