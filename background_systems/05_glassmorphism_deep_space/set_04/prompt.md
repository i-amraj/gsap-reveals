# AI Background Prompt: Magenta Cosmic Horizon (Glassmorphism Deep Space)

```markdown
Implement the dedicated 'Magenta Cosmic Horizon' atmospheric visual background using the 'glass_space' engine.

Specifications:
- Visual Technique: glass_space
- Module: Glassmorphism Deep Space
- Base Color: #140410
- Accent Color: #ec4899
- Characteristics: Floating translucent glass shards and cosmic light flares orbiting with 3D mouse parallax.

CSS Tokens:
```css
:root {
  --bg-primary: #140410;
  --bg-accent: #ec4899;
  --bg-style-engine: 'glass_space';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
