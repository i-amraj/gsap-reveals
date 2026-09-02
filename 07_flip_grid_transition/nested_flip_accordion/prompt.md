# 🤖 AI Master Prompt: Nested Flip Accordion (`nested_flip_accordion`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Nested Flip Accordion effect (`nested_flip_accordion`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create an accordion list with multiple `.accordion-item` elements.
2. Each item has a `.header` and a `.body` (which is `display: none` by default).
3. Clicking the header toggles an `.active` class on the parent item, which changes the `.body` to `display: block`.
4. Use GSAP Flip to animate this DOM change:
   - Call `const state = Flip.getState(".accordion-item, .body");`
   - Toggle the active class.
   - Call `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true, nested: true });`
5. GSAP will perfectly animate the height expansion and smoothly push the sibling items down.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
