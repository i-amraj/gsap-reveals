# 🤖 AI Master Prompt: Bento Box Swap (`bento_box_swap`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Bento Box Swap effect (`bento_box_swap`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a dense Bento Box grid (`display: grid; grid-auto-flow: dense;`).
2. Add various items with different spans (e.g., normal, 2-cols wide, 2-rows tall, 2x2 large).
3. Implement a swap interaction: Click one item to select it, click a second item to swap their positions in the DOM.
4. Use GSAP Flip to animate the DOM swap:
   - Call `const state = Flip.getState(".bento-item");`
   - Swap the DOM nodes.
   - Call `Flip.from(state, { duration: 0.8, ease: "power3.inOut", absolute: true, scale: true });`
5. Ensure the grid perfectly reorganizes itself around the newly swapped different-sized shapes.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
