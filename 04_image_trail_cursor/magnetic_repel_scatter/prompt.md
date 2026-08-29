# 🤖 AI Master Prompt: Magnetic Repel Scatter (`magnetic_repel_scatter`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Magnetic Repel Scatter Trail (`magnetic_repel_scatter`) using GSAP 3.

Requirements:
1. Track mouse coordinates and dynamically spawn images to create a trail.
2. Animate the spawned image popping in. It DOES NOT fade out normally.
3. Instead, on every `mousemove`, check the distance between the current cursor and EVERY active image in the DOM (store them in an array).
4. If the cursor gets too close to an already spawned image (e.g. `< 100px`), use GSAP to aggressively push (repel) the image away from the cursor's direction, adding random rotation and eventually fading it out after being repelled.
5. Provide complete HTML5, CSS3, and JS files.
```
