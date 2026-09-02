# 🤖 AI Master Prompt: Expandable List to Detail (`expandable_list_to_detail`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Expandable List to Detail effect (`expandable_list_to_detail`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a list of `.list-row` items (like emails in an inbox).
2. When a row is clicked, we want to transition to a "Detail View".
3. Toggle a `.detail-mode` class on the main container.
4. In CSS, `.detail-mode` should apply `display: none` to all rows EXCEPT the one with an `.active` class. The `.active` row should change styling to take up a massive height (e.g., `height: 70vh`) and change layout.
5. Use GSAP Flip to animate this:
   - Call `const state = Flip.getState(".list-row");`
   - Add `.active` to the clicked row, and `.detail-mode` to the container.
   - Call `Flip.from(state, { duration: 0.8, ease: "power3.inOut", absolute: true });`
6. GSAP perfectly animates the thin list row expanding into a massive detail view, while the other rows gracefully fade/slide away.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
