# 🤖 AI Master Prompt: Bar Chart Reveal (`bar_chart_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Bar Chart Reveal preloader (`bar_chart_reveal`) using GSAP 3.

Requirements:
1. Setup a `.preloader-wrapper` (fixed, full screen).
2. Inside, create a `.bars-container` (flexbox) covering the screen (`align-items: flex-end`).
3. Place a `.counter-container` with a text counter dead center over everything.
4. In JS, dynamically generate 10 `.bar` elements (`flex: 1`, `height: 0%`, colored).
5. Create a GSAP timeline:
   - Run a counter to 100% over 2 seconds.
   - *Simultaneously*, animate the 10 `.bar` elements to `height: "100%"` using a stagger (`stagger: 0.1`).
6. Once the screen is completely filled (and counter is at 100), fade out the counter text.
7. Animate all 10 `.bar` elements `yPercent: -100` with a stagger (`stagger: 0.05`) to reveal the hero section like a sequential chart wiping away.
8. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
