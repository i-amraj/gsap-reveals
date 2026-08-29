# 🤖 AI Master Prompt: Slice Shredder Explode Trail (`slice_shredder_explode`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Slice Shredder Explode Trail (`slice_shredder_explode`) using GSAP 3.

Requirements:
1. Track mouse coordinates to dynamically spawn container divs.
2. Inside each spawned container, create 4 identical `div` elements, all with the same `background-image` (the trail image).
3. Use CSS `clip-path: polygon()` to slice each of the 4 divs into 4 horizontal strips (top 25%, next 25%, etc).
4. Animate the container popping in (scale 0 to 1).
5. After a short delay, use GSAP to animate the 4 internal sliced strips moving apart (exploding vertically/horizontally) while fading to 0 opacity.
6. Remove the container from the DOM.
7. Provide complete HTML5, CSS3, and JS files.
```
