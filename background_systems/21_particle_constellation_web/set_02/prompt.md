# AI Background Prompt: Neon Purple Neural Network (Particle Constellation Web)

```markdown
Implement the dedicated 'Neon Purple Neural Network' atmospheric visual background using the 'constellation_network' engine.

Specifications:
- Visual Technique: constellation_network
- Module: Particle Constellation Web
- Base Color: #090314
- Accent Color: #c084fc
- Characteristics: Physics-based constellation network with dynamic spiderweb tension lines reacting to mouse proximity.

CSS Tokens:
```css
:root {
  --bg-primary: #090314;
  --bg-accent: #c084fc;
  --bg-style-engine: 'constellation_network';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
