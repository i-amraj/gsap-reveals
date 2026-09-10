# AI Background Prompt: Pure Silver Synapse (Particle Constellation Web)

```markdown
Implement the dedicated 'Pure Silver Synapse' atmospheric visual background using the 'constellation_network' engine.

Specifications:
- Visual Technique: constellation_network
- Module: Particle Constellation Web
- Base Color: #050608
- Accent Color: #f8fafc
- Characteristics: Physics-based constellation network with dynamic spiderweb tension lines reacting to mouse proximity.

CSS Tokens:
```css
:root {
  --bg-primary: #050608;
  --bg-accent: #f8fafc;
  --bg-style-engine: 'constellation_network';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
