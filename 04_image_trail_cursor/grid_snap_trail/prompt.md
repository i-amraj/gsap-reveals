# 🤖 AI Master Prompt: Grid Snap Trail (`grid_snap_trail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Grid Snap Image Trail (`grid_snap_trail`) using GSAP 3.

Requirements:
1. Track mouse coordinates continuously.
2. Define a strict mathematical grid size (e.g., `cellSize = 150px`).
3. As the mouse moves, calculate which grid cell the cursor is currently inside using `Math.floor(mouseX / cellSize) * cellSize`.
4. Only spawn an image if the cursor enters a *new* grid cell (store the last populated cell to prevent infinite spawning).
5. The spawned image should snap perfectly into the calculated grid cell coordinates, ignoring the exact mouse pixel, so it builds a clean masonry/grid layout.
6. Animate it popping in, holding, and then fading out.
7. Provide complete self-contained HTML5, CSS3, and JS files.
```
