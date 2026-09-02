# 🤖 AI Master Prompt: Alternating Column Split (`alternating_column_split`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create an Alternating Column Split preloader (`alternating_column_split`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create a flex container with 6 vertical `.column` elements. Each takes equal width (`flex: 1`) and `100vh` height.
3. Place a `.counter-container` with text dead center above everything.
4. Run a GSAP counter to 100%. Fade it out when complete.
5. In JS, loop through the `.column` elements. If the index is even, animate it `yPercent: -100`. If odd, animate `yPercent: 100`.
6. Add a slight delay/stagger based on the index (e.g. `delay: i * 0.05`) to create an alternating vertical wave effect that unveils the hero section.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
