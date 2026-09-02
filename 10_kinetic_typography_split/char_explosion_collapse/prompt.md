# 🤖 AI Master Prompt: Char Explosion Collapse (`char_explosion_collapse`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Char Explosion Collapse effect (`char_explosion_collapse`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'chars' })` to split the text.
4. Set `.char { display: inline-block; }` in CSS to allow transforms.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { x: () => Math.random() * 600 - 300, y: () => Math.random() * 600 - 300, rotateZ: () => Math.random() * 180 - 90, filter: "blur(5px)", opacity: 0, duration: 1.2, ease: "back.out(1.5)", stagger: 0.02, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This scatters the characters randomly across the screen initially, and pulls them tightly together into readable text.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
