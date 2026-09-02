# 🤖 AI Master Prompt: Masked Word Slide Up (`masked_word_slide_up`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Masked Word Slide Up effect (`masked_word_slide_up`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large heading or paragraph `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines, words' })` to split the text.
4. In CSS, apply `overflow: hidden;` to `.line` elements.
5. Apply `transform: translateY(100%);` initially to `.word` elements via GSAP `from()`, so they are hidden completely outside the line mask.
6. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
7. Use `gsap.from(text.words, { y: '100%', opacity: 0, stagger: 0.05, ease: "power4.out", duration: 1, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
