# 🤖 AI Master Prompt: Word Slam Focus (`word_slam_focus`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Slam Focus effect (`word_slam_focus`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { display: inline-block; transform-origin: center; }` in CSS.
5. Create a GSAP ScrollTrigger (`start: "top 80%"`, `end: "bottom 30%"`, `scrub: true`).
6. Use `gsap.from(text.words, { scale: 3, filter: "blur(20px)", opacity: 0, stagger: 0.1, scrollTrigger: { scrub: true } })`.
7. This causes words to feel like they are slamming down onto the page from the camera lens as the user scrolls.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
