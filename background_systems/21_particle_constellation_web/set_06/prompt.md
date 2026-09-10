# AI Background Prompt: Blood Red Defense Grid (Particle Constellation Web)

```markdown
Implement the dedicated 'Blood Red Defense Grid' atmospheric visual background using the 'constellation_network' engine.

Specifications:
- Visual Technique: constellation_network
- Module: Particle Constellation Web
- Base Color: #140406
- Accent Color: #f87171
- Characteristics: Physics-based constellation network with dynamic spiderweb tension lines reacting to mouse proximity.

CSS Tokens:
```css
:root {
  --bg-primary: #140406;
  --bg-accent: #f87171;
  --bg-style-engine: 'constellation_network';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
