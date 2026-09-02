# 🤖 AI Master Prompt: Flex Direction Switch (`flex_direction_switch`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Flex Direction Switch effect (`flex_direction_switch`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a container with `display: flex; flex-direction: row; gap: 20px;`.
2. Add several children elements inside.
3. Provide a toggle button that toggles a `.column-mode` class on the container, which applies `flex-direction: column;`.
4. Use GSAP Flip to animate this:
   - Call `const state = Flip.getState(".child");`
   - Toggle the `.column-mode` class.
   - Call `Flip.from(state, { duration: 0.8, ease: "power3.inOut", absolute: true });`
5. Watch Flip seamlessly animate elements between a horizontal layout and a vertical stacked layout.
6. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
