# 🤖 AI Master Prompt: List to Grid Toggle (`list_to_grid_toggle`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a List to Grid Toggle effect (`list_to_grid_toggle`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a container with 6 item cards inside.
2. Provide a toggle button to switch between "Grid View" and "List View".
3. In CSS, the default container class is a grid (`grid-template-columns: repeat(3, 1fr)`). When a `.list-view` class is added to the container, it changes to `grid-template-columns: 1fr`.
4. When the user clicks the toggle button:
   - Call `const state = Flip.getState(".item");`
   - Toggle the `.list-view` class on the parent container.
   - Call `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true });`
5. GSAP Flip will magically animate all the cards from their Grid positions/sizes to their List positions/sizes seamlessly.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
