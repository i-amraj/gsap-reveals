# 🤖 AI Master Prompt: Word by Word Opacity (`word_by_word_opacity`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word by Word Opacity reveal effect (`word_by_word_opacity`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to wrap words in spans.
4. Set the initial opacity of the `.word` elements to `0.15` in CSS.
5. Create a ScrollTrigger that targets the `.split-text` block (`start: "top 80%"`, `end: "bottom 20%"`).
6. Use `gsap.to(text.words, { opacity: 1, stagger: 0.1, scrollTrigger: { scrub: true } })` to link the word reveal sequentially to the scroll progress.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
