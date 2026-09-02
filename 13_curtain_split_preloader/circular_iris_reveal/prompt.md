# 🤖 AI Master Prompt: Circular Iris Reveal (`circular_iris_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Circular Iris Reveal preloader (`circular_iris_reveal`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen, dark background).
2. Set its CSS `clip-path` to `circle(150% at 50% 50%)` (large enough to cover the screen corners).
3. Place a `.counter-text` dead center inside it.
4. In JS, run a GSAP counter to 100%.
5. In `onComplete`, fade out the `.counter-text`.
6. Then animate the `.preloader-wrapper`'s `clipPath` to `circle(0% at 50% 50%)` using `ease: "power4.inOut"` over 1.5 seconds.
7. This mimics a camera shutter closing or a classic cartoon iris out, revealing the hero section perfectly.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
