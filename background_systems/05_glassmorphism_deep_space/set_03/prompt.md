# AI Background Prompt: Supernova Amber Prism (Glassmorphism Deep Space)

```markdown
Implement the dedicated 'Supernova Amber Prism' atmospheric visual background using the 'glass_space' engine.

Specifications:
- Visual Technique: glass_space
- Module: Glassmorphism Deep Space
- Base Color: #120902
- Accent Color: #f59e0b
- Characteristics: Floating translucent glass shards and cosmic light flares orbiting with 3D mouse parallax.

CSS Tokens:
```css
:root {
  --bg-primary: #120902;
  --bg-accent: #f59e0b;
  --bg-style-engine: 'glass_space';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
