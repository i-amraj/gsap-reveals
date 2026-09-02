# 🤖 AI Master Prompt: Char Elastic Scale Up (`char_elastic_scale_up`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Elastic Scale Up effect (`char_elastic_scale_up`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.char { display: inline-block; transform-origin: center; }` in CSS to allow scaling from the center of each letter.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.4)", stagger: 0.02, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This gives a highly playful, popping effect where characters scale up past 100% and wobble into place.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
