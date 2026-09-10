# AI Background Prompt: Toxic Yellow Geiger HUD (Glitch VHS CRT Scanlines)

```markdown
Implement the dedicated 'Toxic Yellow Geiger HUD' atmospheric visual background using the 'crt_vhs_glitch' engine.

Specifications:
- Visual Technique: crt_vhs_glitch
- Module: Glitch VHS CRT Scanlines
- Base Color: #131002
- Accent Color: #facc15
- Characteristics: Vintage CRT TV phosphor scanlines, RGB chromatic beam displacement, and horizontal glitch tracking jumps.

CSS Tokens:
```css
:root {
  --bg-primary: #131002;
  --bg-accent: #facc15;
  --bg-style-engine: 'crt_vhs_glitch';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
