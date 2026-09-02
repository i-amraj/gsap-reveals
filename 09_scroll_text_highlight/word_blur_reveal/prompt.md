# 🤖 AI Master Prompt: Word Blur Reveal (`word_blur_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Blur Reveal effect (`word_blur_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to wrap words in spans.
4. Set the initial state of `.word` elements to `opacity: 0` and `filter: blur(15px)` in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 40%"`, `scrub: true`).
6. Animate `opacity: 1` and `filter: "blur(0px)"` staggering across all `text.words`.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
