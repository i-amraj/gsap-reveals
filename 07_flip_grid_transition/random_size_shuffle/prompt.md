# 🤖 AI Master Prompt: Random Size Shuffle (`random_size_shuffle`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Random Size Shuffle effect (`random_size_shuffle`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a CSS Grid with `grid-auto-flow: dense`.
2. Add several items to the grid.
3. Provide a "Chaos Shuffle" button.
4. When clicked:
   - Call `const state = Flip.getState(".item");`
   - Loop through all items: randomly assign them a new CSS class that changes their grid span (`span 2 cols`, `span 2 rows`, or `1x1`), and randomly shuffle their DOM order.
   - Call `Flip.from(state, { duration: 1, ease: "back.out(1.2)", absolute: true, scale: true });`
5. Watch GSAP perfectly animate both the DOM order change AND the size morphing simultaneously without layout breaking.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
