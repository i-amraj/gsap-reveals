# 🤖 AI Master Prompt: Flipbook Scrub Sequence (`scrub_sequence_gallery`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Flipbook Scrub Sequence animation (`scrub_sequence_gallery`) using GSAP 3.

Requirements:
1. Create a container holding a sequence of images (all stacked on top of each other in the center).
2. Initially, only the first image is visible (opacity 1, scale 1), the rest are hidden (opacity 0, scale 0.8).
3. On mousemove, track the cursor's X position relative to the window width to calculate a percentage (0 to 1).
4. Use this percentage to determine which image in the array should be currently visible (like scrubbing through a video timeline or flipbook).
5. Use GSAP to smoothly animate the active image in (opacity 1, scale 1) and the previous/inactive images out (opacity 0, scale 0.8) without instantiating new DOM elements.
6. Provide complete self-contained HTML5, CSS3, and JS files.
```
