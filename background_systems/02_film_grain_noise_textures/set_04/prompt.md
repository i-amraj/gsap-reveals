# AI Background Prompt: Deep Velvet Charcoal (Film Grain & Noise Textures)

```markdown
Implement the dedicated 'Deep Velvet Charcoal' atmospheric visual background using the 'grain' engine.

Specifications:
- Visual Technique: grain
- Module: Film Grain & Noise Textures
- Base Color: #09090b
- Accent Color: #d4d4d8
- Characteristics: Procedural real-time 35mm analog film grain static, high-ISO micro-noise, and dark luxury texture.

CSS Tokens:
```css
:root {
  --bg-primary: #09090b;
  --bg-accent: #d4d4d8;
  --bg-style-engine: 'grain';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
