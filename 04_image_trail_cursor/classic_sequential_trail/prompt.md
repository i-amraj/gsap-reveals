# 🤖 AI Master Prompt: Classic Sequential Trail (`classic_sequential_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Classic Sequential Mouse Image Trail animation (`classic_sequential_trail`) using GSAP 3.

Requirements:
1. Create a full-screen container that tracks mouse movement.
2. Pre-define an array of image URLs (or use multiple hidden image elements).
3. As the mouse moves, calculate the distance from the last spawned image. If the distance exceeds a threshold (e.g., 50px), dynamically spawn an `img` element centered at the current cursor coordinates.
4. Cycle sequentially through the array of image URLs so each spawned image is different.
5. Immediately use GSAP to animate the spawned image: scale it up from 0 to 1, hold it briefly, then fade it out and scale it down, removing it from the DOM when complete.
6. Provide complete self-contained HTML5, CSS3, and JS files.
```
