# AI Prompt: Draggable Pitch Bend Slider with Real-Time Oscilloscope

```markdown
Create an analog synthesizer pitch fader using GSAP Draggable and the Web Audio API with a live canvas waveform oscilloscope.

Key Requirements:
1. GSAP Draggable Slider:
   - Constrained horizontal dragging inside track boundaries.
   - Dynamic track fill gradient expanding with drag position.
   - Smooth exponential pitch mapping from 65Hz (A1) up to 1320Hz (E6).
2. Web Audio Oscillator & Time-Domain Analyser:
   - Oscillator node with selectable waveforms (Sawtooth, Sine, Square).
   - AnalyserNode capturing time-domain waveform data (getByteTimeDomainData).
   - Gain node fading up on drag press and fading out gracefully on release.
3. Canvas Oscilloscope:
   - 60fps HTML5 Canvas oscilloscope drawing the real-time audio wave with neon amber glow.
```
