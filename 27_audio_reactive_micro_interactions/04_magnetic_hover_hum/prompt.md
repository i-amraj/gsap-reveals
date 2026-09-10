# AI Prompt: Magnetic Hover Proximity Hum with Live Web Audio Pitch Shift

```markdown
Build an interactive sci-fi magnetic core where cursor proximity dynamically modulates pitch frequency, volume, and magnetic physical pull in real-time.

Key Requirements:
1. Continuous Web Audio Oscillator Drone:
   - Create a dual-oscillator drone (Fundamental Sine + detuned harmonic triangle wave).
   - Dynamically scale frequency from 100Hz (idle) up to 440Hz (close contact) using AudioParam.setTargetAtTime.
   - Smoothly interpolate gain based on distance (0.001 silent to 0.35 audible).
2. GSAP Magnetic Physics:
   - Calculate distance and angle between cursor and element center.
   - Displace magnetic core towards cursor proportional to proximity.
   - Scale core up and intensify radial box-shadow glow.
   - Snap back with elastic ease (elastic.out(1, 0.4)) on mouse leave.
3. Telemetry HUD:
   - Display real-time readouts for Distance (px), Frequency (Hz), and Magnetic Intensity (%).
```
