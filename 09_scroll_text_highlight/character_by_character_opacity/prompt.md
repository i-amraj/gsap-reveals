# 🤖 AI Master Prompt: Character by Character Opacity (`character_by_character_opacity`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Character by Character Opacity reveal effect (`character_by_character_opacity`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text down to the character level.
4. Set the initial opacity of `.char` elements to `0.1` in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 75%"`, `end: "bottom 25%"`, `scrub: true`).
6. Animate `opacity: 1` staggering across all `text.chars`.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
