# 🤖 AI Master Prompt: Random Scatter Collage Trail (`random_scatter_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Random Scatter Collage Trail animation (`random_scatter_trail`) using DOM generation and GSAP 3.

Requirements:
1. Create a full-screen container tracking mouse movement.
2. Similar to a classic trail, spawn image elements when the cursor travels a certain distance.
3. However, instead of spawning exactly centered and flat, use `gsap.set()` to apply a random rotation (e.g., between -45 and 45 degrees) and a slight random offset (X/Y) to each image as it spawns.
4. Animate the image popping in (scale 0 to 1), staying briefly, and then dropping down slightly (Y translation) while fading out to opacity 0.
5. Destroy the element on complete.
6. Provide complete self-contained HTML5, CSS3, and JS files.
```
