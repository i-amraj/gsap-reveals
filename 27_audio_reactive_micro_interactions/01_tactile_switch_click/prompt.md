# AI Prompt: Tactile Switch & Click with Procedural Web Audio

```markdown
Create an ultra-tactile realistic mechanical toggle switch using GSAP 3 and the native Web Audio API (zero audio file dependencies).

Key Requirements:
1. Audio Synthesis:
   - Use AudioContext to synthesize a realistic dual-frequency mechanical toggle sound.
   - High transient click: Sine/highpass sweep from 1400Hz to 800Hz in 35ms.
   - Low thud body: Triangle wave drop from 160Hz to 30Hz in 90ms with exponential gain decay.
   - Different pitch on toggling ON vs OFF.
2. GSAP Knob Physics:
   - Use squash-and-stretch anticipation on click (scaleX: 1.25, scaleY: 0.85).
   - Fast translation with elastic bounce landing (elastic.out(1.2, 0.4)).
3. Visual Styling:
   - Dark mode cockpit rack (#07090e) with glassmorphic cards and glowing LED state badges.
```
