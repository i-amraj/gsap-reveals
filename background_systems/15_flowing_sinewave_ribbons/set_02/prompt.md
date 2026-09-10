# AI Background Prompt: Violet Sine Cascade (Flowing Sinewave Ribbons)

```markdown
Implement the dedicated 'Violet Sine Cascade' atmospheric visual background using the 'sine_ribbons' engine.

Specifications:
- Visual Technique: sine_ribbons
- Module: Flowing Sinewave Ribbons
- Base Color: #080314
- Accent Color: #8b5cf6
- Characteristics: Continuous harmonic sine wave silk ribbons undulating smoothly with gradient fills across the screen.

CSS Tokens:
```css
:root {
  --bg-primary: #080314;
  --bg-accent: #8b5cf6;
  --bg-style-engine: 'sine_ribbons';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
