# AI Background Prompt: Red Alert Hardware (Circuit Board PCB)

```markdown
Implement the dedicated 'Red Alert Hardware' atmospheric visual background using the 'circuit_pcb' engine.

Specifications:
- Visual Technique: circuit_pcb
- Module: Circuit Board PCB
- Base Color: #140305
- Accent Color: #f87171
- Characteristics: Orthogonal 45/90 degree electronic copper circuit tracks with glowing data packet electrons pulsing through nodes.

CSS Tokens:
```css
:root {
  --bg-primary: #140305;
  --bg-accent: #f87171;
  --bg-style-engine: 'circuit_pcb';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
