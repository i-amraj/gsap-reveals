# 🤖 AI Master Prompt: Horizontal Sliding Doors (`horizontal_sliding_doors`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Sliding Doors preloader (`horizontal_sliding_doors`) using GSAP 3.

Requirements:
1. Setup a full-screen `.preloader-wrapper` (fixed, `z-index: 9999`).
2. Inside the wrapper, create two halves: `.door-left` and `.door-right`, each taking 50% of the screen width (height 100vh). Both should be absolute and black.
3. Place a `.counter-text` (e.g. `0%`) dead center over the doors.
4. In JS, use a GSAP `{ val: 0 }` proxy tween to count to `100` over `2` seconds.
5. In `onUpdate`, update the `.counter-text`.
6. Once the counter finishes, fade out the text.
7. Animate `.door-left` `xPercent: -100` and `.door-right` `xPercent: 100` simultaneously using `ease: "power4.inOut"` to pull the doors apart and reveal the hero section.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
