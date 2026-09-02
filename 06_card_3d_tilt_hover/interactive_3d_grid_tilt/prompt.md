# 🤖 AI Master Prompt: Interactive 3D Grid Tilt (`interactive_3d_grid_tilt`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Interactive 3D Grid Tilt effect (`interactive_3d_grid_tilt`) using GSAP 3.

Requirements:
1. Create a container (`.grid-wrapper`) with `perspective: 1500px`.
2. Inside, create a `.grid-board` (CSS grid, 3x3) holding 9 smaller cards.
3. Set `transform-style: preserve-3d` on the `.grid-board`.
4. Add a `mousemove` event to the `window` or a large invisible area covering the screen.
5. Map the mouse position to tilt the ENTIRE `.grid-board` (not just individual cards).
6. To enhance the depth, give each card inside the grid a slight `translateZ` so they float off the board.
7. Provide complete HTML5, CSS3, and JS files.
```
