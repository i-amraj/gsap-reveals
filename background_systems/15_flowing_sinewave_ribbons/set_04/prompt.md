# AI Background Prompt: Solar Energy Waves (Flowing Sinewave Ribbons)

```markdown
Implement the dedicated 'Solar Energy Waves' atmospheric visual background using the 'sine_ribbons' engine.

Specifications:
- Visual Technique: sine_ribbons
- Module: Flowing Sinewave Ribbons
- Base Color: #140a02
- Accent Color: #f59e0b
- Characteristics: Continuous harmonic sine wave silk ribbons undulating smoothly with gradient fills across the screen.

CSS Tokens:
```css
:root {
  --bg-primary: #140a02;
  --bg-accent: #f59e0b;
  --bg-style-engine: 'sine_ribbons';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
