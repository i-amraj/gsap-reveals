# 🤖 AI Master Prompt: Masked Skew Word Reveal (`masked_skew_word_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Masked Skew Word Reveal effect (`masked_skew_word_reveal`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines, words' })` to split the text.
4. In CSS, apply `overflow: hidden;` to `.line` elements.
5. Apply `transform: translateY(120%) skewY(10deg);` initially to `.word` elements via GSAP `from()`.
6. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
7. Use `gsap.from(text.words, { y: '120%', skewY: 10, opacity: 0, stagger: 0.05, ease: "power4.out", duration: 1, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
