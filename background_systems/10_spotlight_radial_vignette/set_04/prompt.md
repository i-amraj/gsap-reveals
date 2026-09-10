# AI Background Prompt: Warm Champagne Luxe (Spotlight Radial Vignette)

```markdown
Implement the dedicated 'Warm Champagne Luxe' atmospheric visual background using the 'spotlight' engine.

Specifications:
- Visual Technique: spotlight
- Module: Spotlight Radial Vignette
- Base Color: #120e03
- Accent Color: #fde047
- Characteristics: Apple keynote studio spotlight cone following cursor across pitch-black backdrop with soft edge falloff.

CSS Tokens:
```css
:root {
  --bg-primary: #120e03;
  --bg-accent: #fde047;
  --bg-style-engine: 'spotlight';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
