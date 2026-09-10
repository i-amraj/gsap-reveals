# AI Background Prompt: Titanium Studio Torch (Spotlight Radial Vignette)

```markdown
Implement the dedicated 'Titanium Studio Torch' atmospheric visual background using the 'spotlight' engine.

Specifications:
- Visual Technique: spotlight
- Module: Spotlight Radial Vignette
- Base Color: #050608
- Accent Color: #f8fafc
- Characteristics: Apple keynote studio spotlight cone following cursor across pitch-black backdrop with soft edge falloff.

CSS Tokens:
```css
:root {
  --bg-primary: #050608;
  --bg-accent: #f8fafc;
  --bg-style-engine: 'spotlight';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
