# 🤖 AI Master Prompt: Magnifying Glass Tilt (`magnifying_glass_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Magnifying Glass Tilt Hover effect (`magnifying_glass_tilt`) using GSAP 3.

Requirements:
1. Create a 3D tilt card containing an image.
2. Inside the card, create a `.lens` div (circle, hidden overflow) that follows the mouse.
3. Inside the `.lens`, place the *same* image but scaled up (e.g., `transform: scale(2)`).
4. Use GSAP on `mousemove` to move the `.lens` exactly to the mouse coordinates (`x, y`).
5. Simultaneously, move the scaled image *inside* the lens in the OPPOSITE direction so the magnified portion perfectly aligns with the base image behind it.
6. The entire card should still tilt in 3D.
7. Provide complete HTML5, CSS3, and JS files.
```
