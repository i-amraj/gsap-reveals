# AI Background Prompt: Glitch Void Blackout (Glitch VHS CRT Scanlines)

```markdown
Implement the dedicated 'Glitch Void Blackout' atmospheric visual background using the 'crt_vhs_glitch' engine.

Specifications:
- Visual Technique: crt_vhs_glitch
- Module: Glitch VHS CRT Scanlines
- Base Color: #030406
- Accent Color: #94a3b8
- Characteristics: Vintage CRT TV phosphor scanlines, RGB chromatic beam displacement, and horizontal glitch tracking jumps.

CSS Tokens:
```css
:root {
  --bg-primary: #030406;
  --bg-accent: #94a3b8;
  --bg-style-engine: 'crt_vhs_glitch';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
