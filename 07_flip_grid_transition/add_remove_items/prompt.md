# 🤖 AI Master Prompt: Add Remove Items (`add_remove_items`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Add Remove Items effect (`add_remove_items`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a grid container with a few initial items.
2. Include an "Add Item" button that dynamically creates a new DOM element and appends it to the grid.
3. Allow users to click on any grid item to remove it from the DOM.
4. Use GSAP Flip to animate these DOM changes:
   - For adding: `const state = Flip.getState(".item"); container.appendChild(newEl); Flip.from(state, { absolute: true, onEnter: elements => gsap.fromTo(...) });`
   - For removing: `const state = Flip.getState(".item"); item.remove(); Flip.from(state, { absolute: true, onLeave: elements => gsap.to(...) });`
5. This ensures the rest of the grid smoothly reflows when items are added or removed, while the target items scale/fade in and out.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
