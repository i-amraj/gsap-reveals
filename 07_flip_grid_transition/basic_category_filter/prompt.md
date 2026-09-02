# 🤖 AI Master Prompt: Basic Category Filter (`basic_category_filter`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Basic Category Filter effect (`basic_category_filter`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a CSS grid containing 6-8 item cards. Give them `data-category` attributes (e.g., 'design', 'dev', 'video').
2. Create a row of filter buttons above the grid (e.g., 'All', 'Design', 'Dev', 'Video').
3. When a button is clicked, use GSAP Flip to smoothly animate the filtering.
4. Steps:
   - Call `const state = Flip.getState(".grid-item");`
   - Update the DOM: Set `display: none` on items that don't match the category, and `display: flex` (or block) on items that do.
   - Call `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true, scale: true, onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 0.3}), onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 0.3}) });`
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
