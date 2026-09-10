# AI Background Prompt: Nebula Iris Frosted Float (Glassmorphism Deep Space)

```markdown
Implement the dedicated 'Nebula Iris Frosted Float' atmospheric visual background using the 'glass_space' engine.

Specifications:
- Visual Technique: glass_space
- Module: Glassmorphism Deep Space
- Base Color: #060814
- Accent Color: #818cf8
- Characteristics: Floating translucent glass shards and cosmic light flares orbiting with 3D mouse parallax.

CSS Tokens:
```css
:root {
  --bg-primary: #060814;
  --bg-accent: #818cf8;
  --bg-style-engine: 'glass_space';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
