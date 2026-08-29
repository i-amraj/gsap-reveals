# 🤖 AI Master Prompt: Depth Parallax Trail (`parallax_depth_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Depth Parallax Image Trail (`parallax_depth_trail`) using GSAP 3.

Requirements:
1. Track mouse coordinates and dynamically spawn images when moved.
2. For each spawned image, assign a random "depth" value (e.g., Z-index and visual scale).
3. Apply a dynamic `filter: blur()` based on this depth value. Images "further away" (smaller scale) should be highly blurred, while images "close" (larger scale) should be sharp.
4. Animate the images popping in and floating slightly (Y-axis translation based on depth to simulate parallax motion) before fading out.
5. Provide complete self-contained HTML5, CSS3, and JS files.
```
