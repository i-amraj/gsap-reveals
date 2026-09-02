# 🤖 AI Master Prompt: Basic Vertical Curtain Split (`basic_vertical_curtain_split`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Basic Vertical Curtain Split preloader (`basic_vertical_curtain_split`) using GSAP 3.

Requirements:
1. Setup a full-screen `.preloader-wrapper` (fixed, `z-index: 9999`).
2. Inside the wrapper, create two halves: `.curtain-top` and `.curtain-bottom`, each taking 50% of the screen height. Both should be absolute and black.
3. Place a `.counter-text` (e.g. `0%`) dead center over the curtains.
4. Setup a mock hero section underneath the preloader.
5. In JS, use a GSAP `{ val: 0 }` proxy tween to count to `100` over `2` seconds.
6. In `onUpdate`, update the `.counter-text`.
7. In `onComplete`, fade out the `.counter-text`, then animate `.curtain-top` `yPercent: -100` and `.curtain-bottom` `yPercent: 100` simultaneously using `ease: "power3.inOut"` to dramatically reveal the hero section.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
