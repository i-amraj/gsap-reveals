# 🤖 AI Master Prompt: Choreographed Stagger Flip (`choreographed_stagger_flip`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Choreographed Stagger Flip effect (`choreographed_stagger_flip`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a grid of items, some with a specific data attribute (e.g., `data-type="a"` and `data-type="b"`).
2. Create a "Filter Type A" button.
3. When clicked, toggle `display: none` on items that don't match.
4. Animate this with Flip using `stagger` and custom entry/exit animations:
   - Call `const state = Flip.getState(".item");`
   - Apply `display: none` to the filtered elements.
   - Call `Flip.from(state, { duration: 0.8, absolute: true, stagger: 0.05, onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0, rotation: 90 }, { opacity: 1, scale: 1, rotation: 0 }), onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0, rotation: -90 }) });`
5. Watch the beautifully choreographed grid sequence where elements spin out while others shuffle into place.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
