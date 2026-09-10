# AI Background Prompt: Tessellated Amber Pyramids (Geometric Origami Patterns)

```markdown
Implement the dedicated 'Tessellated Amber Pyramids' atmospheric visual background using the 'polyhedra_3d' engine.

Specifications:
- Visual Technique: polyhedra_3d
- Module: Geometric Origami Patterns
- Base Color: #140c03
- Accent Color: #f59e0b
- Characteristics: Rotating 3D isometric polyhedral wireframe cubes and faceted crystal tessellations.

CSS Tokens:
```css
:root {
  --bg-primary: #140c03;
  --bg-accent: #f59e0b;
  --bg-style-engine: 'polyhedra_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
