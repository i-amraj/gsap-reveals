# 🤖 AI Master Prompt: 3D Char Flip Up (`3d_char_flip_up`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Char Flip Up effect (`3d_char_flip_up`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.word { perspective: 1000px; }` and `.char { transform-origin: 50% 100%; }` in CSS to establish a hinge at the bottom of the characters.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { rotateX: -90, opacity: 0, duration: 0.8, stagger: 0.03, ease: "back.out(1.7)", scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This gives a snappy, mechanical departure board flip effect to the text.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
