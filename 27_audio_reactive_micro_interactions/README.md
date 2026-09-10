# Module 27: Audio Reactive Micro-Interactions 🔊✨

Welcome to **Module 27** of the Advanced GSAP Animation Series. This module showcases procedural audio synthesis combined with GSAP spring physics, haptic buttons, real-time frequency analysis, and sound effects—with **zero external audio file dependencies**.

All sound synthesis is procedurally generated using the native browser **Web Audio API (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`, `AnalyserNode`)**.

---

## 🎯 Sub-Demos Overview

| # | Sub-Demo Directory | Core Technique | Audio Synthesis Engine |
|---|---|---|---|
| **01** | `01_tactile_switch_click` | Dual-Frequency Mechanical Switch | Sine snap transient (1400Hz) + low resonant body (160Hz) |
| **02** | `02_spring_pop_haptic_button` | Elastic Squash & Stretch Button | Swept chirp bubble pop + downward retro laser + sub bass thump |
| **03** | `03_sound_frequency_equalizer` | 24-Band Spectrum Visualizer | Pentatonic arpeggio chords + AnalyserNode + `gsap.ticker` |
| **04** | `04_magnetic_hover_hum` | Cursor Proximity Pitch Modulation | Dual-oscillator drone pitch sweep (100Hz–440Hz) + magnetic pull |
| **05** | `05_typewriter_keystroke_audio` | Mechanical Keyboard Typing | Cherry MX Blue click snap + spacebar thud + carriage return chime |
| **06** | `06_slider_pitch_bend` | Draggable Synth Pitch Wheel | Continuous 65Hz–1320Hz pitch bend + canvas oscilloscope |
| **07** | `07_card_flip_whoosh` | 3D Perspective Card Flip | White noise buffer swept through resonant bandpass filter (250Hz–2800Hz) |
| **08** | `08_game_achievement_unlocked` | Gaming Toast & Confetti Fireworks | Ascending major triad chime arpeggio + C7 crystal overtone shimmer |

---

## 💡 How Web Audio Synthesis Works with GSAP

1. **Procedural Synthesis vs MP3s:**
   MP3s can introduce latency, broken URLs, and large bundle sizes. Web Audio synthesizes pure sine, triangle, square, or filtered noise waves directly in real-time with sub-millisecond precision.
2. **Synchronized GSAP Physics:**
   When a transient click triggers, GSAP applies an anticipatory squash (`scaleX: 1.25, scaleY: 0.85`) and an elastic snap landing (`ease: 'elastic.out(1.2, 0.4)'`).
3. **Analysers with GSAP Ticker:**
   Rather than standard `setInterval`, `gsap.ticker.add()` hooks directly into the browser's refresh rate (60–144Hz) to render smooth frequency spectrum bars and falling gravity peaks.

---

## 🚀 Running Sub-Demos
Open any sub-demo directly in your browser:
```bash
# Example
google-chrome 27_audio_reactive_micro_interactions/index.html
# Or with any static web server:
npx serve .
```
