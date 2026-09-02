# 🤖 AI Master Prompt: 3D Line Domino Fall (`3d_line_domino_fall`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Line Domino Fall effect (`3d_line_domino_fall`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines' })` to split the text.
4. Set `.split-text { perspective: 1000px; }` and `.line { transform-origin: bottom center; transform-style: preserve-3d; }` in CSS to hinge the lines at the bottom.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.lines, { rotateX: 90, opacity: 0, duration: 1.5, ease: "bounce.out", stagger: 0.15, scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This causes each line to fall forward and bounce into place sequentially, like a row of dominos tumbling.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
