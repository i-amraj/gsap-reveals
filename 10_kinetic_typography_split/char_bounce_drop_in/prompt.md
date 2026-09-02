# 🤖 AI Master Prompt: Char Bounce Drop In (`char_bounce_drop_in`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Bounce Drop In effect (`char_bounce_drop_in`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.char { display: inline-block; }` in CSS to allow transforms.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { y: -150, opacity: 0, duration: 1.5, ease: "bounce.out", stagger: 0.04, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This causes the characters to rain down from above and bounce elastically into their final resting positions.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
