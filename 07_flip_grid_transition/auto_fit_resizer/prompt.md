# 🤖 AI Master Prompt: Auto Fit Resizer (`auto_fit_resizer`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Auto Fit Resizer effect (`auto_fit_resizer`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a grid container using responsive CSS grid: `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`.
2. Add several items to the grid.
3. Provide three buttons: "Width: 100%", "Width: 50%", "Width: 30%".
4. When a button is clicked:
   - Call `const state = Flip.getState(".item");`
   - Change the container's width (e.g., `container.style.width = "50%"`).
   - Because of `auto-fit`, the CSS grid instantly reflows and wraps elements to new lines.
   - Call `Flip.from(state, { duration: 0.8, ease: "power3.inOut", absolute: true });`
5. GSAP will perfectly animate the massive layout change as items scramble into their new responsive rows.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
