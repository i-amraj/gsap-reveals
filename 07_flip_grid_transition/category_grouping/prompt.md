# 🤖 AI Master Prompt: Category Grouping (`category_grouping`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Category Grouping effect (`category_grouping`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a grid of items with mixed data attributes (e.g., `data-color="red"`, `"blue"`, `"green"`).
2. Initially, they are placed in the DOM randomly, so the colors are mixed up visually.
3. Provide a "Group by Color" button and a "Shuffle" button.
4. When "Group" is clicked, sort the DOM elements based on their `data-color` attribute so all similar colors are grouped sequentially in the DOM.
5. Use GSAP Flip:
   - Call `const state = Flip.getState(".box");`
   - Re-append the sorted DOM nodes into the container.
   - Call `Flip.from(state, { duration: 0.8, ease: "back.out(1.2)", absolute: true, stagger: 0.02 });`
6. GSAP will perfectly animate the scattered boxes congregating into their sorted color groups.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
