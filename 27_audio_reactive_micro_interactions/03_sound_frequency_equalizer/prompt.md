# AI Prompt: Real-time Audio Spectrum Equalizer with GSAP Ticker

```markdown
Build an interactive 24-band frequency spectrum equalizer powered by procedural Web Audio API synthesis and GSAP 3's gsap.ticker.

Key Requirements:
1. Audio Synthesis & Analyser:
   - Procedural pentatonic arpeggiator (136 BPM) generating triangle waves passed through lowpass biquad filters with resonance (Q=3).
   - AudioContext AnalyserNode with fftSize=64 extracting real-time byte frequency data.
2. GSAP Ticker Visualizer:
   - 60fps ticker loop sampling analyser frequency bins and smoothly mapping them to 24 equalizer bar heights.
   - Falling gravity peak floaters with decaying velocity above each bar.
   - Idle breathing sine wave mode when audio is paused.
3. Multi-Theme Switching:
   - Dynamic theme styles: Neon Cyan, Sunset Fire, Cyber Matrix.
```
