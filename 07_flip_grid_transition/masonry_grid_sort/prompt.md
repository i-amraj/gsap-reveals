# 🤖 AI Master Prompt: Masonry Grid Sort (`masonry_grid_sort`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Masonry Grid Sort effect (`masonry_grid_sort`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a Masonry layout using CSS `column-count: 3` and `break-inside: avoid` on the items.
2. Give each item a random height and a `data-sort` attribute (e.g., numbers 1-9).
3. Create a "Sort by ID" and "Shuffle" button.
4. When clicked, capture state `const state = Flip.getState(".item");`.
5. Reorder the DOM nodes (sort the array of elements based on `data-sort` or randomly shuffle them, then `appendChild` them back to the container in the new order).
6. Call `Flip.from(state, { duration: 0.8, ease: "power3.inOut", absolute: true });`.
7. Watch as GSAP magically untangles the complex CSS column masonry reflow perfectly.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
