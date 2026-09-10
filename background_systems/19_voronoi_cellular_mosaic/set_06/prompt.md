# AI Background Prompt: Obsidian Architectural Mesh (Voronoi Cellular Mosaic)

```markdown
Implement the dedicated 'Obsidian Architectural Mesh' atmospheric visual background using the 'voronoi_cells' engine.

Specifications:
- Visual Technique: voronoi_cells
- Module: Voronoi Cellular Mosaic
- Base Color: #07080c
- Accent Color: #cbd5e1
- Characteristics: True mathematical Voronoi cellular tessellation with drifting nuclei and glowing organic cell borders.

CSS Tokens:
```css
:root {
  --bg-primary: #07080c;
  --bg-accent: #cbd5e1;
  --bg-style-engine: 'voronoi_cells';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
