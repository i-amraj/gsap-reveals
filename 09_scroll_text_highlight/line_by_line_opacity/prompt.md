# 🤖 AI Master Prompt: Line by Line Opacity (`line_by_line_opacity`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Line by Line Opacity reveal effect (`line_by_line_opacity`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines' })` to split the text into discrete horizontal lines.
4. Set the initial opacity of `.line` elements to `0.1` in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 70%"`, `end: "bottom 30%"`, `scrub: true`).
6. Animate `opacity: 1` staggering across all `text.lines`.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
