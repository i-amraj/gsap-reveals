# 🤖 AI Master Prompt: Click to Front Shuffle (`click_to_front_shuffle`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Click to Front Shuffle effect (`click_to_front_shuffle`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a container with 9 grid items.
2. When a user clicks any item, that item should be moved to the very first position in the grid (using DOM manipulation: `parent.prepend(item)`).
3. Use GSAP Flip to animate this DOM change:
   - Call `const state = Flip.getState(".grid-item");`
   - Prepend the clicked element to the container.
   - Call `Flip.from(state, { duration: 0.6, ease: "back.out(1.2)", absolute: true });`
4. This creates a beautiful shuffling effect where the clicked card animates to the start, and all other cards gracefully shuffle down to make room.
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
