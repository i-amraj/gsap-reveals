# 🤖 AI Master Prompt: Horizontal Venetian Blinds (`horizontal_venetian_blinds`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Horizontal Venetian Blinds preloader (`horizontal_venetian_blinds`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create a flex column container with 6 horizontal `.row` elements. Each takes `100vw` width and `flex: 1` (equal height).
3. Place a `.counter-container` dead center above everything.
4. Run a GSAP counter to 100%. Fade it out when complete.
5. In JS, loop through the `.row` elements. If the index is even, animate it `xPercent: 100`. If odd, animate `xPercent: -100`.
6. Use `ease: "power4.inOut"` and `duration: 1.5` to create a beautiful opposing sliding blinds effect that reveals the hero section.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
