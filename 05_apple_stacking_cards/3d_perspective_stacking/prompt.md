# 🤖 AI Master Prompt: 3D Perspective Stacking (`3d_perspective_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Perspective Apple-Style Stacking Cards effect (`3d_perspective_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 4-5 large content cards.
2. Ensure the main wrapper has `perspective: 1500px` to enable 3D depth.
3. As the user scrolls down, when a card reaches the top of the viewport (`top top`), it should pin (`pinSpacing: false`).
4. As the *next* card scrolls up, the currently pinned card should animate backwards into 3D space:
   - `rotateX` backwards (e.g. `rotateX: -15deg`)
   - `scale` down to `0.85`
   - `brightness` drop to simulate depth shadowing.
5. Provide complete HTML5, CSS3, and JS files. Ensure the design feels premium.
```
