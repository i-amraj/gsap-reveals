# 🤖 AI Master Prompt: Parallax Multi Layer Track (`parallax_multi_layer_track`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Parallax Multi Layer Track effect (`parallax_multi_layer_track`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Setup a pinned horizontal scroll section (`.horizontal-section`).
2. Inside, create three absolutely positioned layers:
   - `.bg-layer` (Background shapes, moves slow).
   - `.mid-layer` (Main track of cards, moves normal).
   - `.fg-layer` (Foreground floating text/shapes, moves fast).
3. Use a single GSAP timeline linked to ScrollTrigger with `pin: true` and `scrub: 1`.
4. Animate each layer on the X-axis by different amounts to create profound depth:
   - Mid layer translates `-(trackWidth - innerWidth)`.
   - BG layer translates `-(trackWidth - innerWidth) * 0.5`.
   - FG layer translates `-(trackWidth - innerWidth) * 1.5`.
5. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
