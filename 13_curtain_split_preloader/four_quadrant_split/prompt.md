# 🤖 AI Master Prompt: Four Quadrant Split (`four_quadrant_split`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Four Quadrant Split preloader (`four_quadrant_split`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create 4 quadrant divs: `.quad-tl`, `.quad-tr`, `.quad-bl`, `.quad-br`.
3. Set each to `width: 50vw` and `height: 50vh`, absolutely positioned to cover their respective corners. Use a dark background.
4. Place a `.counter-text` dead center (above the quadrants).
5. In JS, run a GSAP counter to 100%.
6. In `onComplete`, fade out the text.
7. Animate the 4 quadrants apart simultaneously:
   - TL goes `xPercent: -100, yPercent: -100`
   - TR goes `xPercent: 100, yPercent: -100`
   - BL goes `xPercent: -100, yPercent: 100`
   - BR goes `xPercent: 100, yPercent: 100`
8. Use `ease: "power4.inOut"` for a dramatic, center-burst reveal of the hero section.
9. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
