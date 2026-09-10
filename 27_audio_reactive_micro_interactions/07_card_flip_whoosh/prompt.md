# AI Prompt: 3D Card Flip with Procedural Filtered Noise Air Whoosh

```markdown
Create a 3D credit card flip interaction accompanied by an acoustic air whoosh sound synthesized via Web Audio API bandpass-filtered noise.

Key Requirements:
1. Procedural Noise & Filtered Whoosh:
   - Procedurally generate a 1-second white noise buffer using AudioContext.
   - Route noise through a resonant Bandpass Filter (Q=3.5).
   - Sweep filter frequency upwards from 250Hz to 2800Hz and back down to 400Hz over 420ms.
   - Synchronize exponential gain ramp up and down for smooth swoosh sound envelope.
2. 3D GSAP Card Flip:
   - CSS 3D preserve-3d and backface-visibility: hidden.
   - GSAP timeline with lift scale (scale: 1.08) and rotateY flip with back.inOut(1.4) overshoot easing.
```
