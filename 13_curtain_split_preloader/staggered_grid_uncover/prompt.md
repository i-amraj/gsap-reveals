# 🤖 AI Master Prompt: Staggered Grid Uncover (`staggered_grid_uncover`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Staggered Grid Uncover preloader (`staggered_grid_uncover`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create a `.grid-container` and use CSS Grid (`grid-template-columns: repeat(6, 1fr)`) to fill the screen with 36 `.grid-block` elements.
3. Also place a absolutely positioned `.counter-container` in the center.
4. In JS, dynamically generate the 36 `.grid-block` elements and append them to the container.
5. Run a GSAP counter to 100%.
6. In `onComplete`, fade out the counter text.
7. Animate all `.grid-block` elements: `{ scale: 0, opacity: 0, rotation: 10 }` using GSAP's advanced stagger: `{ grid: [6, 6], from: "center", amount: 1.5 }`.
8. This creates a highly complex, futuristic disintegration of the loader to reveal the site.
9. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
