# 🤖 AI Master Prompt: Grid to Carousel (`grid_to_carousel`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Grid to Carousel effect (`grid_to_carousel`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a `display: flex; flex-wrap: wrap;` container acting as a Grid (items are e.g., 33% width).
2. Add a toggle button to switch to "Carousel View".
3. When clicked, toggle a `.carousel-mode` class on the container which changes it to `flex-wrap: nowrap; overflow-x: auto;`, and changes the child items to a fixed width (e.g., `min-width: 300px`).
4. Use GSAP Flip to animate this massive layout change:
   - Call `const state = Flip.getState(".card");`
   - Toggle the `.carousel-mode` class.
   - Call `Flip.from(state, { duration: 0.8, ease: "power2.inOut", absolute: true });`
5. GSAP will perfectly morph all the items from a wrapped grid into a single horizontal scrolling row.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
