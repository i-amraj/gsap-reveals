# 🤖 AI Master Prompt: 3D Char Barrel Roll (`3d_char_barrel_roll`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Char Barrel Roll effect (`3d_char_barrel_roll`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.word { perspective: 1000px; }` and `.char { transform-origin: center; display: inline-block; }` in CSS to establish a 3D context.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { rotateX: 180, y: 50, opacity: 0, duration: 1, stagger: 0.03, ease: "back.out(1.5)", scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This causes the characters to spin 180 degrees backwards while sliding up into their final positions.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
