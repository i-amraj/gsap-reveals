# AI Background Prompt: Amethyst Mystic Spark (Fire Ember Particle Rise)

```markdown
Implement the dedicated 'Amethyst Mystic Spark' atmospheric visual background using the 'fire_embers' engine.

Specifications:
- Visual Technique: fire_embers
- Module: Fire Ember Particle Rise
- Base Color: #0a0216
- Accent Color: #a855f7
- Characteristics: Fiery embers and glowing ash sparks floating upward with turbulent air currents and color temperature shift.

CSS Tokens:
```css
:root {
  --bg-primary: #0a0216;
  --bg-accent: #a855f7;
  --bg-style-engine: 'fire_embers';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
