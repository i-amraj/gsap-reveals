# AI Background Prompt: Cyberpunk Neon Blue Flight (Starfield Cosmos Warp)

```markdown
Implement the dedicated 'Cyberpunk Neon Blue Flight' atmospheric visual background using the 'warp_stars' engine.

Specifications:
- Visual Technique: warp_stars
- Module: Starfield Cosmos Warp
- Base Color: #020817
- Accent Color: #38bdf8
- Characteristics: 3D warp speed hyperspace starfield flying outward from center with speed streaking and mouse steering.

CSS Tokens:
```css
:root {
  --bg-primary: #020817;
  --bg-accent: #38bdf8;
  --bg-style-engine: 'warp_stars';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
