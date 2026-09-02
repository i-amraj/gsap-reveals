# 🤖 AI Master Prompt: Hero Image Expansion (`hero_image_expansion`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Hero Image Expansion effect (`hero_image_expansion`) using GSAP 3 and the GSAP Flip plugin.

Requirements:
1. Create a grid of small thumbnail images.
2. When a user clicks a thumbnail, it should expand to cover the entire screen (Hero Image). Clicking it again shrinks it back to its original grid spot.
3. This is done by toggling an `.active-hero` class on the clicked image which applies `position: fixed; inset: 0; width: 100vw; height: 100vh; z-index: 100;`.
4. Use GSAP Flip:
   - Call `const state = Flip.getState(".thumb");`
   - Toggle the class on the clicked element.
   - Call `Flip.from(state, { duration: 0.8, ease: "power3.inOut", absolute: true });`
5. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP Flip CDN is included.
```
