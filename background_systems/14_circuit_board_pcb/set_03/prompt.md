# AI Background Prompt: Quantum Optical Fiber (Circuit Board PCB)

```markdown
Implement the dedicated 'Quantum Optical Fiber' atmospheric visual background using the 'circuit_pcb' engine.

Specifications:
- Visual Technique: circuit_pcb
- Module: Circuit Board PCB
- Base Color: #080214
- Accent Color: #c084fc
- Characteristics: Orthogonal 45/90 degree electronic copper circuit tracks with glowing data packet electrons pulsing through nodes.

CSS Tokens:
```css
:root {
  --bg-primary: #080214;
  --bg-accent: #c084fc;
  --bg-style-engine: 'circuit_pcb';
}
```

Usage Guidelines:
- Render inside a `<canvas id="bgCanvas">` set to `position: fixed; inset: 0; z-index: 0; pointer-events: none;`.
- Maintain 60 FPS performance by utilizing requestAnimationFrame with offscreen buffer math.
- Overlay glassmorphic or high-contrast content cards with `backdrop-filter: blur(20px)`.
```
