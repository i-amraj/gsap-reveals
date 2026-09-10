# AI Background Prompt: Aged Japanese Washi (Film Grain & Noise Textures)

```markdown
Implement the dedicated 'Aged Japanese Washi' atmospheric visual background using the 'grain' engine.

Specifications:
- Visual Technique: grain
- Module: Film Grain & Noise Textures
- Base Color: #1c1917
- Accent Color: #f5f5f4
- Characteristics: Procedural real-time 35mm analog film grain static, high-ISO micro-noise, and dark luxury texture.

CSS Tokens:
```css
:root {
  --bg-primary: #1c1917;
  --bg-accent: #f5f5f4;
  --bg-style-engine: 'grain';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
