# 🤖 AI Master Prompt: Snake Follower Path (`snake_follower_path`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Snake Follower Path Image Trail (`snake_follower_path`) using GSAP 3.

Requirements:
1. Hardcode a fixed number of DOM image elements (e.g., 10).
2. Create an array to act as a history/buffer of the last N mouse coordinates.
3. On mousemove, push the new coordinates to the front of the array and pop the oldest to maintain a fixed length.
4. On `requestAnimationFrame` (or GSAP ticker), map each image's position to a specific index in the historical coordinate array. 
5. The lead image gets the newest coordinate, the last image gets the oldest coordinate.
6. This creates a slithering "snake" of images that strictly follows the path you draw, rather than spawning new DOM elements.
7. Provide complete HTML5, CSS3, and JS files.
```
