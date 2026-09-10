# AI Background Prompt: Violet Prism Stage (Spotlight Radial Vignette)

```markdown
Implement the dedicated 'Violet Prism Stage' atmospheric visual background using the 'spotlight' engine.

Specifications:
- Visual Technique: spotlight
- Module: Spotlight Radial Vignette
- Base Color: #0a0314
- Accent Color: #c084fc
- Characteristics: Apple keynote studio spotlight cone following cursor across pitch-black backdrop with soft edge falloff.

CSS Tokens:
```css
:root {
  --bg-primary: #0a0314;
  --bg-accent: #c084fc;
  --bg-style-engine: 'spotlight';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
