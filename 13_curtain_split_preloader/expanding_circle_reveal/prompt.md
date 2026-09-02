# 🤖 AI Master Prompt: Expanding Circle Reveal (`expanding_circle_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Expanding Circle Reveal preloader (`expanding_circle_reveal`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` holding a `.counter-text`.
2. Setup a `.hero-section` absolutely positioned *above* the preloader (`z-index: 2`).
3. Set the `.hero-section` CSS `clip-path` to `circle(0% at 50% 50%)` so it is completely invisible on load.
4. In JS, run a GSAP counter to 100%.
5. In `onComplete`, fade out the `.counter-text`.
6. Then animate the `.hero-section`'s `clipPath` to `circle(150% at 50% 50%)` using `ease: "power3.inOut"`.
7. This inverts the standard logic—instead of hiding the loader, we dynamically expand the hero section through a circular mask from the center of the screen.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
