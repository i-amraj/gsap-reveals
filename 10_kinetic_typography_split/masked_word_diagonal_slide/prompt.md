# 🤖 AI Master Prompt: Masked Word Diagonal Slide (`masked_word_diagonal_slide`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Masked Word Diagonal Slide effect (`masked_word_diagonal_slide`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines, words' })` to split the text.
4. In CSS, apply `overflow: hidden;` to `.line` elements.
5. Apply `transform: translate(50px, 120%);` initially to `.word` elements via GSAP `from()`.
6. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
7. Use `gsap.from(text.words, { x: 50, y: '120%', opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.05, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
