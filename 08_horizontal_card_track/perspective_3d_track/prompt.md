# 🤖 AI Master Prompt: Perspective 3D Track (`perspective_3d_track`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Perspective 3D Track (Cover Flow) effect (`perspective_3d_track`) using GSAP 3 and ScrollTrigger's `containerAnimation`.

Requirements:
1. Setup a pinned horizontal scroll `.track` translating left. Save as `trackTween`.
2. Apply `perspective: 1200px` to the `.horizontal-section` wrapper.
3. In CSS, initially set `.card` elements to `transform: rotateY(50deg) scale(0.8) translateZ(-100px); opacity: 0.4;`. Ensure `transform-style: preserve-3d`.
4. Loop through each `.card` and create a ScrollTrigger linked via `containerAnimation: trackTween`.
5. As the card approaches the center (`start: "center 80%"` to `end: "center center"`), animate to:
   - `rotateY: 0`
   - `scale: 1`
   - `translateZ: 0`
   - `opacity: 1`
6. Apply `yoyo: true` and `repeat: 1` so it flips backwards (`rotateY(-50deg)` relative visually) as it exits.
   - Note: To make it physically correct like Cover Flow, you might need two ScrollTriggers (one for entering left, one for exiting right), or just let the yoyo repeat to the starting `rotateY(50deg)`. For true cover flow, going past center usually flips to `-50deg`. If you want true coverflow, use a scrubbed timeline from `-50deg` to `0` to `50deg`.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP and ScrollTrigger CDNs are included.
```
