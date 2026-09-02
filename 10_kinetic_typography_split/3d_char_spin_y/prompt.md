# 🤖 AI Master Prompt: 3D Char Spin Y (`3d_char_spin_y`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Char Spin Y effect (`3d_char_spin_y`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'words, chars' })` to split the text.
4. Set `.word { perspective: 1000px; }` and `.char { display: inline-block; transform-style: preserve-3d; }` in CSS.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.chars, { rotateY: 360, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.02, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This causes each character to spin a full 360 degrees horizontally into view.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
