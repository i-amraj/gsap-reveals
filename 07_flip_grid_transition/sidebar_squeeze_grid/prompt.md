# 🤖 AI Master Prompt: Sidebar Squeeze Grid (`sidebar_squeeze_grid`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Sidebar Squeeze Grid effect (`sidebar_squeeze_grid`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a dashboard layout: a flex container with a `.sidebar` (width 0 or hidden) and a `.main-content` (flex: 1).
2. Inside `.main-content`, create a responsive CSS grid (`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`) with several `.widget` items.
3. Provide a "Toggle Sidebar" button. When clicked, toggle a class that expands the `.sidebar` to 250px width.
4. This CSS change shrinks the `.main-content` width, forcing the auto-fit grid to wrap items to the next row abruptly.
5. Use GSAP Flip to animate this:
   - `const state = Flip.getState(".widget");`
   - Toggle the sidebar class.
   - `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true });`
6. The widgets will perfectly glide into their new row/column positions as the sidebar opens and closes.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
