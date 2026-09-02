# 🤖 AI Master Prompt: Word Blur Scale Slam (`word_blur_scale_slam`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Word Blur Scale Slam effect (`word_blur_scale_slam`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words' })` to split the text.
4. Set `.word { display: inline-block; transform-origin: center; }` in CSS.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.words, { scale: 3, filter: "blur(10px)", opacity: 0, duration: 0.6, ease: "expo.in", stagger: 0.05, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This causes words to start massively scaled and blurred, accelerating heavily downwards and slamming into focus with a hard stop.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
