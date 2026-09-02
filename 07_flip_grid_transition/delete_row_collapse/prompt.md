# 🤖 AI Master Prompt: Delete Row Collapse (`delete_row_collapse`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Delete Row Collapse effect (`delete_row_collapse`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a vertical list of rows (e.g., a shopping cart or task list).
2. Add a "Delete" button to each row.
3. When clicked, completely remove the row element from the DOM (`item.remove()`).
4. Use GSAP Flip to animate this deletion:
   - Call `const state = Flip.getState(".row");`
   - Remove the node.
   - Call `Flip.from(state, { absolute: true, onLeave: elements => gsap.to(elements, { height: 0, opacity: 0, margin: 0 }) });`
5. By animating the `height` and `opacity` in the `onLeave` callback while `absolute: true` is set, the removed row will smoothly shrink to nothing while all the rows below it glide upwards to fill the gap.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
