# AI Background Prompt: Swiss Minimal Wireframe (Geometric Origami Patterns)

```markdown
Implement the dedicated 'Swiss Minimal Wireframe' atmospheric visual background using the 'polyhedra_3d' engine.

Specifications:
- Visual Technique: polyhedra_3d
- Module: Geometric Origami Patterns
- Base Color: #07090e
- Accent Color: #cbd5e1
- Characteristics: Rotating 3D isometric polyhedral wireframe cubes and faceted crystal tessellations.

CSS Tokens:
```css
:root {
  --bg-primary: #07090e;
  --bg-accent: #cbd5e1;
  --bg-style-engine: 'polyhedra_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
