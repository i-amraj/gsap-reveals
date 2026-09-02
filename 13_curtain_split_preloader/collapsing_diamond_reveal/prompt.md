# 🤖 AI Master Prompt: Collapsing Diamond Reveal (`collapsing_diamond_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Collapsing Diamond Reveal preloader (`collapsing_diamond_reveal`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Set its CSS `clip-path` to a massive diamond that covers the screen: `polygon(50% -100%, 200% 50%, 50% 200%, -100% 50%)`.
3. Place a `.counter-text` dead center.
4. Run a GSAP counter to 100%. Fade it out when complete.
5. Animate the `.preloader-wrapper`'s `clipPath` to completely collapse into the center point: `polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)`.
6. Use `ease: "power4.inOut"` and `duration: 1.5` for a stunning angular collapse effect revealing the hero section.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
