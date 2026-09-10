# AI Background Prompt: Matrix Terminal Sweep (Radar Sonar Tactical Sweep)

```markdown
Implement the dedicated 'Matrix Terminal Sweep' atmospheric visual background using the 'radar_sweep' engine.

Specifications:
- Visual Technique: radar_sweep
- Module: Radar Sonar Tactical Sweep
- Base Color: #011206
- Accent Color: #4ade80
- Characteristics: Concentric military radar distance rings with a 360-degree rotating beam and fading contact blips.

CSS Tokens:
```css
:root {
  --bg-primary: #011206;
  --bg-accent: #4ade80;
  --bg-style-engine: 'radar_sweep';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
