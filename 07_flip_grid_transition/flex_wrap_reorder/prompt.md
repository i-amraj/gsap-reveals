# 🤖 AI Master Prompt: Flex Wrap Reorder (`flex_wrap_reorder`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Flex Wrap Reorder effect (`flex_wrap_reorder`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a `display: flex; flex-wrap: wrap;` container.
2. Inside, add various `.tag` items with different dynamic widths (based on their text length).
3. Provide a way to interact (e.g., clicking a tag swaps it with its next sibling in the DOM using `container.insertBefore(nextSibling, clickedItem)`).
4. GSAP Flip handles the animation:
   - Call `const state = Flip.getState(".tag");`
   - Swap the elements in the DOM.
   - Call `Flip.from(state, { duration: 0.5, ease: "power2.inOut", absolute: true });`
5. Watch GSAP perfectly animate complex flex wrapping transitions as items swap rows dynamically.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
