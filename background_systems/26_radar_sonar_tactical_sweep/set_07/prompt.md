# AI Background Prompt: Stealth Gray Sensor Array (Radar Sonar Tactical Sweep)

```markdown
Implement the dedicated 'Stealth Gray Sensor Array' atmospheric visual background using the 'radar_sweep' engine.

Specifications:
- Visual Technique: radar_sweep
- Module: Radar Sonar Tactical Sweep
- Base Color: #050608
- Accent Color: #94a3b8
- Characteristics: Concentric military radar distance rings with a 360-degree rotating beam and fading contact blips.

CSS Tokens:
```css
:root {
  --bg-primary: #050608;
  --bg-accent: #94a3b8;
  --bg-style-engine: 'radar_sweep';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
