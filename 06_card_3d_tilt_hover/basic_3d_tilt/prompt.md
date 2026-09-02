# 🤖 AI Master Prompt: Basic 3D Tilt Hover (`basic_3d_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Basic 3D Tilt Hover effect (`basic_3d_tilt`) using GSAP 3.

Requirements:
1. Create a centered grid of 3 cards.
2. The card wrapper must have `perspective: 1000px`.
3. Track the mouse movement over the card (`mousemove` event).
4. Calculate the mouse position relative to the card's center (from -1 to 1 on X and Y).
5. Use GSAP to animate the card's `rotationY` and `rotationX` based on this normalized position, up to a maximum angle (e.g., 15 degrees).
6. Reset the rotation to 0 smoothly on `mouseleave`.
7. Provide complete HTML5, CSS3, and JS files.
```
