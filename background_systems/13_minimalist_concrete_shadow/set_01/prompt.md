# AI Background Prompt: Zurich Concrete Daylight (Minimalist Concrete & Shadow)

```markdown
Implement the dedicated 'Zurich Concrete Daylight' atmospheric visual background using the 'window_shadows' engine.

Specifications:
- Visual Technique: window_shadows
- Module: Minimalist Concrete & Shadow
- Base Color: #18181b
- Accent Color: #f8fafc
- Characteristics: Architectural window blind sunbeam shadow casting slowly swaying across minimal textured wall surface.

CSS Tokens:
```css
:root {
  --bg-primary: #18181b;
  --bg-accent: #f8fafc;
  --bg-style-engine: 'window_shadows';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
