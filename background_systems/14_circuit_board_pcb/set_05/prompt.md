# AI Background Prompt: Stealth Black PCB Matte (Circuit Board PCB)

```markdown
Implement the dedicated 'Stealth Black PCB Matte' atmospheric visual background using the 'circuit_pcb' engine.

Specifications:
- Visual Technique: circuit_pcb
- Module: Circuit Board PCB
- Base Color: #05070a
- Accent Color: #94a3b8
- Characteristics: Orthogonal 45/90 degree electronic copper circuit tracks with glowing data packet electrons pulsing through nodes.

CSS Tokens:
```css
:root {
  --bg-primary: #05070a;
  --bg-accent: #94a3b8;
  --bg-style-engine: 'circuit_pcb';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
