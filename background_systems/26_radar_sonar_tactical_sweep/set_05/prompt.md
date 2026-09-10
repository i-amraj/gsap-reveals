# AI Background Prompt: Cyber Violet Quantum Scanner (Radar Sonar Tactical Sweep)

```markdown
Implement the dedicated 'Cyber Violet Quantum Scanner' atmospheric visual background using the 'radar_sweep' engine.

Specifications:
- Visual Technique: radar_sweep
- Module: Radar Sonar Tactical Sweep
- Base Color: #090214
- Accent Color: #c084fc
- Characteristics: Concentric military radar distance rings with a 360-degree rotating beam and fading contact blips.

CSS Tokens:
```css
:root {
  --bg-primary: #090214;
  --bg-accent: #c084fc;
  --bg-style-engine: 'radar_sweep';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
