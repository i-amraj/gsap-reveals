# 🤖 AI Master Prompt: Flip Reveal Tilt (`flip_reveal_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Flip Reveal Tilt Hover effect (`flip_reveal_tilt`) using GSAP 3.

Requirements:
1. Create a 3D tilt card setup, but instead of listening to mousemove on the card itself, listen to a larger invisible wrapper or the `window`.
2. The card should have two faces: `.front` and `.back`, utilizing `backface-visibility: hidden` and `transform: rotateY(180deg)` on the back.
3. Map the mouse X position across the screen to rotate the card from `-180deg` to `180deg` on the Y axis.
4. As the user moves their mouse from the left side of the screen to the right, the card fully flips over, revealing the back.
5. Provide complete HTML5, CSS3, and JS files.
```
