# 🤖 AI Master Prompt: 3D Perspective Unfold (`3d_perspective_unfold`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a 3D Perspective Unfold effect (`3d_perspective_unfold`) using GSAP 3, ScrollTrigger, and SplitType.

Requirements:
1. Setup a large paragraph of text `.split-text` centered on the screen.
2. Load the `SplitType` CDN (`https://unpkg.com/split-type`).
3. Use `new SplitType('.split-text', { types: 'lines, words' })` to split the text.
4. Set `.line { perspective: 1000px; }` and `.word { transform-origin: top center; }` in CSS to hinge the words from the top.
5. Create a GSAP ScrollTrigger to trigger the animation when the text enters the viewport (no scrub).
6. Use `gsap.from(text.words, { rotateX: -90, opacity: 0, duration: 0.8, stagger: 0.04, ease: "power3.out", scrollTrigger: { trigger: ".split-text", start: "top 80%" } })`.
7. This makes the words smoothly fold down into place like unrolling a map.
8. Provide complete HTML5, CSS3, and JS files. Ensure GSAP, ScrollTrigger, and SplitType CDNs are included.
```
