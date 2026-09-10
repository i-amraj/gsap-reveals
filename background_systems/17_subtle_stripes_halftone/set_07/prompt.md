# AI Background Prompt: Technical Graph Paper (Subtle Stripes & Halftone)

```markdown
Implement the dedicated 'Technical Graph Paper' atmospheric visual background using the 'halftone_moire' engine.

Specifications:
- Visual Technique: halftone_moire
- Module: Subtle Stripes & Halftone
- Base Color: #040810
- Accent Color: #3b82f6
- Characteristics: Risograph halftone pattern and angled diagonal scanline stripes with dynamic moiré interference.

CSS Tokens:
```css
:root {
  --bg-primary: #040810;
  --bg-accent: #3b82f6;
  --bg-style-engine: 'halftone_moire';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
