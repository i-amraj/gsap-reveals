# AI Background Prompt: Ruby Facet Kaleidoscope (Geometric Origami Patterns)

```markdown
Implement the dedicated 'Ruby Facet Kaleidoscope' atmospheric visual background using the 'polyhedra_3d' engine.

Specifications:
- Visual Technique: polyhedra_3d
- Module: Geometric Origami Patterns
- Base Color: #170308
- Accent Color: #f43f5e
- Characteristics: Rotating 3D isometric polyhedral wireframe cubes and faceted crystal tessellations.

CSS Tokens:
```css
:root {
  --bg-primary: #170308;
  --bg-accent: #f43f5e;
  --bg-style-engine: 'polyhedra_3d';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
