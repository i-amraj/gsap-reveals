# 🤖 AI Master Prompt: Word Stagger Scale (`word_stagger_scale`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Stagger Scale effect (`word_stagger_scale`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
5. Use `gsap.from(text.words, { opacity: 0, scale: 0.5, stagger: 0.1, scrollTrigger: { scrub: true } })`.
6. This makes words physically pop and scale up into existence as you scroll down.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
