# AI Background Prompt: Angled Pinstripe Minimal (Subtle Stripes & Halftone)

```markdown
Implement the dedicated 'Angled Pinstripe Minimal' atmospheric visual background using the 'halftone_moire' engine.

Specifications:
- Visual Technique: halftone_moire
- Module: Subtle Stripes & Halftone
- Base Color: #0a0a0c
- Accent Color: #94a3b8
- Characteristics: Risograph halftone pattern and angled diagonal scanline stripes with dynamic moiré interference.

CSS Tokens:
```css
:root {
  --bg-primary: #0a0a0c;
  --bg-accent: #94a3b8;
  --bg-style-engine: 'halftone_moire';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
