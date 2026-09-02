# 🤖 AI Master Prompt: Accordion Expand Grid (`accordion_expand_grid`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Accordion Expand Grid effect (`accordion_expand_grid`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a CSS grid with `grid-template-columns: repeat(4, 1fr)`.
2. Add several `.grid-item` elements.
3. When an item is clicked, toggle an `.expanded` class on it.
4. In CSS, the `.expanded` class should change the item to `grid-column: span 2; grid-row: span 2;`.
5. Use GSAP Flip to animate the layout change:
   - Call `const state = Flip.getState(".grid-item, .content");`
   - Toggle the `.expanded` class.
   - Call `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true, nested: true });`
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
