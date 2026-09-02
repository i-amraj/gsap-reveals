# 🤖 AI Master Prompt: Split Text Curtain (`split_text_curtain`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Split Text Curtain preloader (`split_text_curtain`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` with `.curtain-top` and `.curtain-bottom`.
2. Inside the wrapper, create two identical text elements: `.counter-top` and `.counter-bottom`. 
3. Use `clip-path` so `.counter-top` only shows the top half of the text (`polygon(0 0, 100% 0, 100% 50%, 0 50%)`), and `.counter-bottom` shows the bottom half. Both should be absolutely positioned dead center.
4. In JS, run a GSAP counter to 100%, updating both text elements simultaneously.
5. In `onComplete`, group `.curtain-top` with `.counter-top` and animate them `yPercent: -100`. 
6. Group `.curtain-bottom` with `.counter-bottom` and animate them `yPercent: 100`.
7. This creates an incredible effect where the 100% text literally tears in half along with the screen to reveal the site.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
