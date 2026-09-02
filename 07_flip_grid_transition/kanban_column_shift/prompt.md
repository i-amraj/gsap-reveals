# 🤖 AI Master Prompt: Kanban Column Shift (`kanban_column_shift`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Kanban Column Shift effect (`kanban_column_shift`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a Kanban board layout: 3 columns (To Do, In Progress, Done).
2. Add several `.task-card` elements in the first column.
3. When a user clicks a `.task-card`, it should move to the next logical column (`appendChild`). If it's in the last column, it cycles back to the first.
4. Use GSAP Flip to animate this DOM change across different parent containers:
   - Call `const state = Flip.getState(".task-card");`
   - Move the DOM node to the new column.
   - Call `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true });`
5. GSAP will flawlessly animate the card flying across the screen into its new column, while siblings shift to fill the gap.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
