# AI Background Prompt: Marble Atrium Ray (Minimalist Concrete & Shadow)

```markdown
Implement the dedicated 'Marble Atrium Ray' atmospheric visual background using the 'window_shadows' engine.

Specifications:
- Visual Technique: window_shadows
- Module: Minimalist Concrete & Shadow
- Base Color: #13161c
- Accent Color: #cbd5e1
- Characteristics: Architectural window blind sunbeam shadow casting slowly swaying across minimal textured wall surface.

CSS Tokens:
```css
:root {
  --bg-primary: #13161c;
  --bg-accent: #cbd5e1;
  --bg-style-engine: 'window_shadows';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
