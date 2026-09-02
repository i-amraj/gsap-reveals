# 🤖 AI Master Prompt: Line Mask Reveal Up (`line_mask_reveal_up`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Line Mask Reveal Up effect (`line_mask_reveal_up`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines, words' })` to split the text. This nests words inside lines.
4. Set `.line { overflow: hidden; padding-top: 5px; }` in CSS to act as clipping masks.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 40%"`, `scrub: true`).
6. Use `gsap.from(text.words, { y: "100%", stagger: 0.05, scrollTrigger: { scrub: true } })`. Since lines are `overflow: hidden`, the words physically sweep up out of nowhere!
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
