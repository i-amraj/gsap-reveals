# 🤖 AI Master Prompt: Character Color Fill (`character_color_fill`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Character Color Fill effect (`character_color_fill`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Set the initial state of `.char` elements to `color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.2);` in CSS so they look like empty outlines.
5. Create a GSAP ScrollTrigger (`start: "top 75%"`, `end: "bottom 25%"`, `scrub: true`).
6. Animate `color: "#fff"` staggering across all `text.chars`. This fills the outlines with solid color sequentially as you scroll.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
