# 🤖 AI Master Prompt: Masked Char Slide Up (`masked_char_slide_up`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Masked Char Slide Up effect (`masked_char_slide_up`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. In CSS, apply `overflow: hidden;` to `.word` elements so they mask their inner characters.
5. Apply `transform: translateY(120%);` initially to `.char` elements via GSAP `from()`.
6. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
7. Use `gsap.from(text.chars, { y: '120%', opacity: 0, stagger: 0.02, ease: "power3.out", duration: 0.8, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
