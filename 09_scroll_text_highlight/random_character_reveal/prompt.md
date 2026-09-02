# 🤖 AI Master Prompt: Random Character Reveal (`random_character_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Random Character Reveal effect (`random_character_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Set `.char { opacity: 0.1; }` initially in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.to(text.chars, { opacity: 1, stagger: { amount: 1, from: "random" }, scrollTrigger: { scrub: true } })`. This causes the characters to fade in randomly across the entire paragraph as you scroll down.
7. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
