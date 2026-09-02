# 🤖 AI Master Prompt: Multi-Layer Curtain (`multi_layer_curtain`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Multi-Layer Curtain preloader (`multi_layer_curtain`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create 3 `.layer` elements. Make them absolute, covering `100vw` and `100vh`. Give them 3 different colors (e.g. dark, medium, light theme colors). Stack them using `z-index`.
3. Place a `.counter-text` above everything.
4. In JS, run a GSAP counter to 100%.
5. In `onComplete`, fade out the counter text.
6. Then animate the 3 `.layer` elements `yPercent: -100` using a stagger (`stagger: 0.2`) and `ease: "power4.inOut"`.
7. This creates a beautiful, fluid, multi-layered wipe effect that reveals the hero section underneath.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
