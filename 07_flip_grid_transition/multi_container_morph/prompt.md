# 🤖 AI Master Prompt: Multi Container Morph (`multi_container_morph`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Multi Container Morph effect (`multi_container_morph`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create two separate flex containers (e.g., "Available Options" and "Selected Options").
2. Fill "Available Options" with several `.tag` items.
3. When a user clicks a `.tag` in the "Available" container, move its DOM node to the "Selected" container (`appendChild`).
4. When a user clicks a `.tag` in the "Selected" container, move it back to "Available".
5. Use GSAP Flip to animate this:
   - Call `const state = Flip.getState(".tag");`
   - Move the node.
   - Call `Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true });`
6. GSAP will perfectly animate the item morphing and flying between the two completely different containers while making room in both.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
