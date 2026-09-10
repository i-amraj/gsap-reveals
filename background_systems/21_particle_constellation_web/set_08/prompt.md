# AI Background Prompt: Laser Aqua Mesh (Particle Constellation Web)

```markdown
Implement the dedicated 'Laser Aqua Mesh' atmospheric visual background using the 'constellation_network' engine.

Specifications:
- Visual Technique: constellation_network
- Module: Particle Constellation Web
- Base Color: #021214
- Accent Color: #2dd4bf
- Characteristics: Physics-based constellation network with dynamic spiderweb tension lines reacting to mouse proximity.

CSS Tokens:
```css
:root {
  --bg-primary: #021214;
  --bg-accent: #2dd4bf;
  --bg-style-engine: 'constellation_network';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
