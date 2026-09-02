# 🤖 AI Master Prompt: Diagonal Slice Reveal (`diagonal_slice_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Diagonal Slice Reveal preloader (`diagonal_slice_reveal`) using GSAP 3 and CSS clip-path.

Requirements:
1. Setup a full-screen `.preloader-wrapper` (fixed, `z-index: 9999`).
2. Create two curtains using `clip-path`: 
   - `.curtain-top-left` (`clip-path: polygon(0 0, 100% 0, 0 100%);`)
   - `.curtain-bottom-right` (`clip-path: polygon(100% 0, 100% 100%, 0 100%);`)
3. Both curtains should be absolute, covering `100vw` and `100vh`, colored black.
4. Place a `.counter-text` dead center.
5. In JS, use a `{ val: 0 }` proxy to count to `100` over `2` seconds.
6. In `onComplete`, fade out the text. Then animate `.curtain-top-left` (`xPercent: -100, yPercent: -100`) and `.curtain-bottom-right` (`xPercent: 100, yPercent: 100`) simultaneously using `ease: "power4.inOut"`.
7. This creates an aggressive diagonal slice reveal to the hero section underneath.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
